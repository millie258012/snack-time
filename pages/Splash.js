import React, { useEffect } from 'react';
import htm from 'htm';
import { useNavigate } from 'react-router-dom';

const html = htm.bind(React.createElement);

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return html`
    <div className="relative flex h-screen min-h-[640px] w-full flex-col items-center justify-center bg-[#4CAF50] overflow-hidden">
      <span className="material-symbols-outlined absolute -top-8 -left-12 text-7xl text-white/10 rotate-[25deg] scale-x-[-1]">eco</span>
      <span className="material-symbols-outlined absolute top-16 -right-10 text-9xl text-white/15 rotate-[-15deg]">eco</span>
      <span className="material-symbols-outlined absolute top-1/4 left-8 text-5xl text-white/5 rotate-[-30deg]">eco</span>
      <span className="material-symbols-outlined absolute bottom-1/3 -left-4 text-6xl text-white/10 rotate-[10deg]">eco</span>
      <span className="material-symbols-outlined absolute bottom-24 -right-8 text-8xl text-white/20 rotate-[35deg] scale-x-[-1]">eco</span>
      <span className="material-symbols-outlined absolute -bottom-10 left-1/4 text-9xl text-white/15 rotate-[5deg]">eco</span>
      <span className="material-symbols-outlined absolute top-1/2 right-1/4 text-4xl text-white/5 rotate-[-45deg]">eco</span>

      <div className="flex flex-col items-center justify-center p-8 z-10 w-full flex-1">
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-white text-outline tracking-tight text-5xl sm:text-6xl font-extrabold leading-tight text-center select-none">
            Shifting<br />Snack<br />Sellers
          </h1>
        </div>
        <div className="w-full max-w-xs pb-8 sm:pb-12">
          <button 
            onClick=${() => navigate('/home')}
            className="w-full bg-white text-green-800 font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-white/50 transition-colors duration-300"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  `;
};

export default Splash;
