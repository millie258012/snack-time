import React, { useRef, useEffect } from 'react';
import htm from 'htm';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.js';

const html = htm.bind(React.createElement);

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout, updateAvatar } = useAuth();
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) {
    return null;
  }

  const handleAvatarClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('username', user.username);
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8001/api/update-avatar', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        // Prepend server URL to local avatar paths
        const fullAvatarUrl = data.avatar_url.startsWith('http') 
          ? data.avatar_url 
          : `http://localhost:8001${data.avatar_url}`;
        updateAvatar(fullAvatarUrl);
      }
    } catch (err) {
      console.error('Failed to update avatar:', err);
    }
  };

  return html`
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-surface-light">
      <div className="flex items-center p-4 pb-2 justify-between">
        <button 
          onClick=${() => navigate('/home')}
          aria-label="Exit" 
          className="text-[#212121] flex size-12 shrink-0 items-center justify-start"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
        <h2 className="text-[#212121] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Profile</h2>
        <button 
          onClick=${logout}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-200 text-text-main text-sm font-bold leading-normal tracking-[0.015em] shrink-0 hover:bg-gray-300 transition-colors"
        >
          <span className="truncate">LOGOUT</span>
        </button>
      </div>

      <div className="flex p-4 justify-center">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="relative flex flex-col gap-4 items-center">
            <div className="relative group cursor-pointer" onClick=${handleAvatarClick}>
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-32 h-32 border-4 border-primary/20" 
                style=${{ backgroundImage: `url("${user.avatar_url}")` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white text-4xl">photo_camera</span>
              </div>
              <input
                type="file"
                ref=${fileInputRef}
                className="hidden"
                accept="image/*"
                onChange=${handleFileChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4">
        <p className="text-2xl font-bold text-[#212121]">${user.username}</p>
        <p className="text-text-muted text-sm">Member since 2025</p>
      </div>

      <div className="h-8"></div>

      <div className="flex flex-col px-4 gap-4">
        <button 
          onClick=${() => navigate('/orders')}
          className="flex items-center gap-4 bg-gray-50 hover:bg-gray-100 px-4 min-h-[56px] py-3 rounded-lg border border-gray-200 transition-colors"
        >
          <span className="material-symbols-outlined text-gray-600">receipt_long</span>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-[#212121] text-base font-medium leading-normal">My Orders</p>
          </div>
          <span className="material-symbols-outlined text-gray-400">chevron_right</span>
        </button>

        <div className="flex items-center gap-4 bg-gray-50 px-4 min-h-[56px] py-3 rounded-lg border border-gray-200">
          <span className="material-symbols-outlined text-gray-600">settings</span>
          <div className="flex flex-1 flex-col justify-center items-start">
            <p className="text-[#212121] text-base font-medium leading-normal">Account Settings</p>
          </div>
          <span className="material-symbols-outlined text-gray-400">chevron_right</span>
        </div>
      </div>
    </div>
  `;
};

export default Profile;
