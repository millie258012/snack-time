import os
import sqlite3
from fastapi import FastAPI, HTTPException, UploadFile, File, Form, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import Optional
import shutil
from pathlib import Path

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database setup
DB_PATH = "users.db"
AVATAR_DIR = Path("static/avatars")
AVATAR_DIR.mkdir(parents=True, exist_ok=True)

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            avatar_url TEXT
        )
    """)
    conn.commit()
    conn.close()

init_db()

# Models
class UserCreate(BaseModel):
    username: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str

class UserResponse(BaseModel):
    username: str
    avatar_url: Optional[str] = None

# Routes
@app.post("/api/register", response_model=UserResponse)
async def register(user: UserCreate):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    try:
        # Default avatar
        default_avatar = "https://lh3.googleusercontent.com/aida-public/AB6AXuDayrsTgHJupVnZeJMd57ij3TAmvmq8uc0Nb6Bv5mGXYAobWDfhX9vHXkgmf0y9SRB-b69ArIKFlVYQon66xhn2I3pAtg_x7ino8EFnpOUYE5wVJl9HNj_eUKLuYKHfthlobnFlI-0aKb-ElkmBcZk_trzSjlUnwcWmTk05XSoS-5kbGCzv7OPxEe5PSbJIujMXr4-lV5ci4kJTRuexBYyKoeD0yGtqjHiV8yKOwchFWKhBnG4gVtwXnj95O8k21eTmvamVm2ORUSg"
        cursor.execute("INSERT INTO users (username, password, avatar_url) VALUES (?, ?, ?)", 
                       (user.username, user.password, default_avatar))
        conn.commit()
        return {"username": user.username, "avatar_url": default_avatar}
    except sqlite3.IntegrityError:
        raise HTTPException(status_code=400, detail="Username already exists")
    finally:
        conn.close()

@app.post("/api/login", response_model=UserResponse)
async def login(user: UserLogin):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (user.username, user.password))
    row = cursor.fetchone()
    conn.close()
    
    if row:
        return {"username": row["username"], "avatar_url": row["avatar_url"]}
    raise HTTPException(status_code=401, detail="Invalid username or password")

@app.post("/api/update-avatar")
async def update_avatar(username: str = Form(...), file: UploadFile = File(...)):
    file_extension = os.path.splitext(file.filename)[1]
    file_name = f"{username}{file_extension}"
    file_path = AVATAR_DIR / file_name
    
    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    avatar_url = f"/static/avatars/{file_name}"
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("UPDATE users SET avatar_url = ? WHERE username = ?", (avatar_url, username))
    conn.commit()
    conn.close()
    
    return {"avatar_url": avatar_url}

# Serve static files from the root directory
# We need to serve index.html for all non-API routes for SPA support
@app.get("/")
async def read_index():
    return FileResponse("index.html")

# Serve other static files (js, assets, etc.)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Catch-all to serve index.html for SPA routing
@app.get("/{full_path:path}")
async def catch_all(full_path: str):
    # If the path exists as a file, serve it
    if os.path.isfile(full_path):
        return FileResponse(full_path)
    # Otherwise serve index.html for SPA
    return FileResponse("index.html")
