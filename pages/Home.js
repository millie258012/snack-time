import React, { useState } from 'react';
import htm from 'htm';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants.js';
import { useCart } from '../context/CartContext.js';

const html = htm.bind(React.createElement);

const Home = () => {
  const navigate = useNavigate();
  const { addToCart, totalItems } = useCart();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return html`
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light pb-20">
      <div className="sticky top-0 z-10 flex flex-col bg-background-light/80 backdrop-blur-sm">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button 
            onClick=${() => navigate('/profile')}
            className="flex size-12 shrink-0 items-center justify-start text-text-main"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
          <h1 className="text-text-main text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Snack Time!
          </h1>
          <div className="flex w-12 items-center justify-end">
            <button 
              onClick=${() => navigate('/cart')}
              className="relative flex cursor-pointer items-center justify-center rounded-xl h-12 text-text-main gap-2 p-0"
            >
              <span className="material-symbols-outlined text-3xl">shopping_bag</span>
              ${totalItems > 0 && html`
                <div className="absolute top-2 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-xs font-bold">
                  ${totalItems}
                </div>
              `}
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 py-3">
        <label className="flex flex-col h-12 w-full">
          <div className="flex w-full flex-1 items-stretch rounded-full h-full">
            <div className="text-green-800 flex border-none bg-primary/20 items-center justify-center pl-4 rounded-l-full border-r-0">
              <span className="material-symbols-outlined">search</span>
            </div>
            <input 
              className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-full text-text-main focus:outline-0 focus:ring-0 border-none bg-primary/20 focus:border-none h-full placeholder:text-green-800 px-4 pl-2 text-base font-normal leading-normal" 
              placeholder="Search for snacks..." 
              value=${searchTerm}
              onChange=${(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </label>
      </div>

      <div className="flex gap-3 p-4 pt-0 overflow-x-auto hide-scrollbar pb-4">
        ${CATEGORIES.map((category) => html`
          <button
            key=${category}
            onClick=${() => setSelectedCategory(category)}
            className=${`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-surface-light text-text-main'
            }`}
          >
            <p className="text-sm font-medium leading-normal">${category}</p>
          </button>
        `)}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-4 p-4 pt-0">
        ${filteredProducts.map((product) => html`
          <div 
            key=${product.id}
            onClick=${() => navigate(`/product/${product.id}`)}
            className="flex cursor-pointer flex-col gap-2 rounded-xl bg-surface-light shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div className="relative w-full aspect-square">
              <div 
                className="w-full h-full bg-center bg-no-repeat bg-cover transform transition-transform group-hover:scale-105 duration-500" 
                style=${{ backgroundImage: `url("${product.image}")` }}
              ></div>
            </div>
            <div className="p-3 pt-0 flex flex-col gap-3">
              <p className="text-text-main text-base font-medium leading-normal truncate">
                ${product.name}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-text-main text-lg font-bold leading-normal">
                  $${product.price.toFixed(2)}
                </p>
                <button 
                  onClick=${(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="flex items-center justify-center size-9 rounded-full bg-primary text-white hover:bg-green-600 transition-colors"
                >
                  <span className="material-symbols-outlined !text-xl">add</span>
                </button>
              </div>
            </div>
          </div>
        `)}
      </div>
    </div>
  `;
};

export default Home;
