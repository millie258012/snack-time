import React from 'react';
import htm from 'htm';
import { useNavigate } from 'react-router-dom';

const html = htm.bind(React.createElement);

const Profile = () => {
  const navigate = useNavigate();

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
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#D32F2F] text-white text-sm font-bold leading-normal tracking-[0.015em] shrink-0 hover:bg-red-700 transition-colors">
          <span className="truncate">DELETE</span>
        </button>
      </div>

      <div className="flex p-4 justify-center">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="relative flex flex-col gap-4 items-center">
            <div className="relative group">
              <div 
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-32 h-32" 
                style=${{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDayrsTgHJupVnZeJMd57ij3TAmvmq8uc0Nb6Bv5mGXYAobWDfhX9vHXkgmf0y9SRB-b69ArIKFlVYQon66xhn2I3pAtg_x7ino8EFnpOUYE5wVJl9HNj_eUKLuYKHfthlobnFlI-0aKb-ElkmBcZk_trzSjlUnwcWmTk05XSoS-5kbGCzv7OPxEe5PSbJIujMXr4-lV5ci4kJTRuexBYyKoeD0yGtqjHiV8yKOwchFWKhBnG4gVtwXnj95O8k21eTmvamVm2ORUSg")` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity">
                <span className="material-symbols-outlined text-white text-4xl">photo_camera</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-4">
        <p className="text-2xl font-bold text-[#212121]">Jane Doe</p>
      </div>

      <div className="h-8"></div>

      <div className="flex flex-col px-4">
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
      </div>
    </div>
  `;
};

export default Profile;
