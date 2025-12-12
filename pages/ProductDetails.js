import React, { useState } from 'react';
import htm from 'htm';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants.js';
import { useCart } from '../context/CartContext.js';

const html = htm.bind(React.createElement);

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return html`<div>Product not found</div>`;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  const handleScroll = (e) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setActiveImageIndex(index);
  };

  return html`
    <div className="bg-background-light min-h-screen pb-24">
      <div className="sticky top-0 z-10 flex items-center bg-background-light/80 p-4 pb-2 justify-between backdrop-blur-lg">
        <button 
          onClick=${() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full bg-white/50 hover:bg-white/80 transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center text-ellipsis overflow-hidden whitespace-nowrap px-2">
          ${product.name}
        </h2>
        <button className="flex size-10 items-center justify-center rounded-full bg-white/50 hover:bg-white/80 transition-colors">
          <span className="material-symbols-outlined text-red-500 filled-icon">favorite</span>
        </button>
      </div>

      <div className="px-4 pt-2">
        <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-lg bg-white">
          <div 
            className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory hide-scrollbar"
            onScroll=${handleScroll}
          >
            ${product.images.map((img, idx) => html`
              <img 
                key=${idx}
                alt=${product.name} 
                className="w-full h-full object-cover flex-shrink-0 snap-center" 
                src=${img} 
              />
            `)}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 p-1.5 bg-black/30 backdrop-blur-sm rounded-full">
            ${product.images.map((_, idx) => html`
              <div 
                key=${idx}
                className=${`size-2 rounded-full ${idx === activeImageIndex ? 'bg-white' : 'bg-white/50'}`}
              ></div>
            `)}
          </div>
        </div>
      </div>

      <div className="p-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-text-main">
          ${product.name}
        </h1>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex gap-0.5">
            ${[1, 2, 3, 4, 5].map((star) => html`
              <span 
                key=${star} 
                className=${`material-symbols-outlined text-yellow-500 text-[20px] ${star <= Math.round(product.rating) ? 'filled-icon' : ''}`}
              >
                ${star <= Math.floor(product.rating) ? 'star' : (star === Math.ceil(product.rating) && product.rating % 1 !== 0) ? 'star_half' : 'star'}
              </span>
            `)}
          </div>
          <p className="text-sm font-medium text-text-muted">(${product.reviews} reviews)</p>
        </div>
      </div>

      <div className="px-4 pb-5 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick=${() => setQuantity(Math.max(1, quantity - 1))}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
          >
            <span className="material-symbols-outlined">remove</span>
          </button>
          <span className="text-2xl font-bold w-8 text-center text-text-main">${quantity}</span>
          <button 
            onClick=${() => setQuantity(quantity + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20"
          >
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <h2 className="text-4xl font-bold leading-tight tracking-[-0.015em] text-primary">
          $${(product.price * quantity).toFixed(2)}
        </h2>
      </div>

      <div className="px-4 pb-5 space-y-4">
        <div>
          <h3 className="font-bold text-lg mb-2 text-text-main">Description</h3>
          <p className="text-base text-text-muted">
            ${product.description}
          </p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2 text-text-main">Ingredients</h3>
          <p className="text-sm text-text-muted">
            ${product.ingredients}
          </p>
        </div>
      </div>

      <div className="px-4 pb-8 space-y-6">
        <h3 className="font-bold text-lg text-text-main">Customer Reviews</h3>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="flex flex-col gap-1 items-center">
            <p className="text-5xl font-black leading-tight tracking-[-0.033em] text-text-main">${product.rating}</p>
            <div className="flex gap-0.5">
               ${[1, 2, 3, 4, 5].map(i => html`<span key=${i} className="material-symbols-outlined text-yellow-500 text-[18px] filled-icon">star</span>`)}
            </div>
            <p className="text-sm font-normal leading-normal text-text-muted">Based on ${product.reviews} reviews</p>
          </div>
          <div className="grid min-w-[200px] max-w-[400px] flex-1 grid-cols-[20px_1fr_40px] items-center gap-y-2">
            <p className="text-sm font-medium leading-normal text-text-main">5</p>
            <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-primary/20"><div className="rounded-full bg-primary" style=${{width: '85%'}}></div></div>
            <p className="text-primary/80 text-sm font-normal leading-normal text-right">85%</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-light/80 backdrop-blur-lg border-t border-gray-200">
        <button 
          onClick=${handleAddToCart}
          className="w-full flex items-center justify-center h-14 rounded-xl bg-primary text-white text-lg font-bold shadow-lg shadow-primary/30 hover:bg-green-600 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  `;
};

export default ProductDetails;
