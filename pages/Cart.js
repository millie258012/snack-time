import React from 'react';
import htm from 'htm';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext.js';

const html = htm.bind(React.createElement);

const Cart = () => {
  const navigate = useNavigate();
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  return html`
    <div className="relative mx-auto flex h-screen w-full max-w-md flex-col overflow-hidden bg-background-light">
      <header className="flex shrink-0 items-center justify-between p-4 pt-6">
        <button 
          onClick=${() => navigate(-1)}
          className="flex size-10 items-center justify-center rounded-full hover:bg-black/5"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="text-xl font-bold text-text-main">My Cart</h1>
        <div className="size-10"></div>
      </header>

      <main className="flex-1 overflow-y-auto px-4 pb-4 hide-scrollbar">
        ${items.length === 0 ? html`
          <div className="flex h-full flex-col items-center justify-center text-center">
            <span className="material-symbols-outlined text-6xl text-gray-300">shopping_cart_off</span>
            <p className="mt-4 text-lg font-medium text-text-muted">Your cart is empty</p>
            <button 
              onClick=${() => navigate('/home')}
              className="mt-6 text-primary font-bold"
            >
              Start Shopping
            </button>
          </div>
        ` : html`
          <div className="space-y-4">
            ${items.map((item) => html`
              <div key=${item.id} className="flex items-center gap-4 rounded-xl bg-surface-light p-4 shadow-sm">
                <div 
                  className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat" 
                  style=${{ backgroundImage: `url("${item.image}")` }}
                ></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-text-main">${item.name}</p>
                      <p className="mt-1 text-sm font-bold text-primary">$${item.price.toFixed(2)}</p>
                    </div>
                    <button 
                      onClick=${() => removeFromCart(item.id)}
                      className="flex size-8 shrink-0 items-center justify-center rounded-full text-text-muted hover:bg-black/5"
                    >
                      <span className="material-symbols-outlined text-xl">delete</span>
                    </button>
                  </div>
                  <div className="mt-3 flex items-center justify-end">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick=${() => updateQuantity(item.id, item.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-text-main hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="w-5 text-center font-semibold text-text-main">${item.quantity}</span>
                      <button 
                        onClick=${() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white hover:bg-green-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `)}
          </div>
        `}
      </main>

      <footer className="shrink-0 border-t border-gray-200 bg-surface-light p-4">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-text-main">Total</p>
          <p className="text-xl font-bold text-primary">$${totalPrice.toFixed(2)}</p>
        </div>
        <div className="mt-4">
          <button className="flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary text-lg font-bold text-white shadow-lg shadow-primary/30 hover:bg-green-600 transition-colors">
            <span>Proceed to Checkout</span>
          </button>
        </div>
      </footer>
    </div>
  `;
};

export default Cart;
