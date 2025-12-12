import React, { useState } from 'react';
import htm from 'htm';
import { useNavigate } from 'react-router-dom';
import { ORDERS } from '../constants.js';

const html = htm.bind(React.createElement);

const Orders = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Active');

  const getStatusColor = (status) => {
    switch(status) {
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Processing': return 'bg-orange-100 text-orange-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return html`
    <div className="relative mx-auto flex h-auto min-h-screen w-full max-w-md flex-col overflow-x-hidden bg-background-light">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200/80 bg-background-light/80 p-4 pb-2 backdrop-blur-sm">
        <button 
          onClick=${() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full text-slate-700 hover:bg-slate-200"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold tracking-tight text-slate-900">My Orders</h1>
        <div className="size-10 shrink-0"></div>
      </header>

      <div className="border-b border-gray-200 bg-background-light">
        <nav className="flex px-4">
          ${['Active', 'Completed', 'Cancelled'].map((tab) => html`
            <button
              key=${tab}
              onClick=${() => setActiveTab(tab)}
              className=${`flex flex-1 flex-col items-center justify-center border-b-[3px] py-3 pt-4 transition-colors ${
                activeTab === tab 
                  ? 'border-b-primary text-slate-900 font-bold' 
                  : 'border-b-transparent text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <p className="text-sm">${tab}</p>
            </button>
          `)}
        </nav>
      </div>

      <main className="flex-1 space-y-4 p-4">
        ${activeTab === 'Active' ? html`
          ${ORDERS.map((order) => html`
            <div key=${order.id} className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-shadow hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-base font-bold text-slate-900">Order #${order.id}</p>
                  <p className="text-xs text-slate-500">Placed on ${order.date}</p>
                </div>
                <div className=${`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(order.status)}`}>
                  ${order.status}
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-sm text-slate-600">Total Amount</p>
                  <p className="text-xl font-bold text-slate-900">$${order.total.toFixed(2)}</p>
                </div>
                <button className="flex items-center gap-1 text-sm font-medium text-primary hover:text-green-700">
                  View Details
                  <span className="material-symbols-outlined text-base">chevron_right</span>
                </button>
              </div>
            </div>
          `)}
        ` : html`
          <div className="flex flex-1 flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-white/50 p-12 text-center mt-10">
            <div className="flex size-16 items-center justify-center rounded-full bg-primary/20 text-primary">
              <span className="material-symbols-outlined text-4xl">shopping_bag</span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-800">No ${activeTab.toLowerCase()} orders</h3>
            <p className="mt-1 text-sm text-slate-600">Time to order some snacks!</p>
          </div>
        `}
      </main>
    </div>
  `;
};

export default Orders;
