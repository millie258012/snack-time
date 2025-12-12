import React from 'react';
import htm from 'htm';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash.js';
import Home from './pages/Home.js';
import ProductDetails from './pages/ProductDetails.js';
import Cart from './pages/Cart.js';
import Profile from './pages/Profile.js';
import Orders from './pages/Orders.js';
import { CartProvider } from './context/CartContext.js';

const html = htm.bind(React.createElement);

const App = () => {
  return html`
    <${CartProvider}>
      <${Router}>
        <${Routes}>
          <${Route} path="/" element=${html`<${Splash} />`} />
          <${Route} path="/home" element=${html`<${Home} />`} />
          <${Route} path="/product/:id" element=${html`<${ProductDetails} />`} />
          <${Route} path="/cart" element=${html`<${Cart} />`} />
          <${Route} path="/profile" element=${html`<${Profile} />`} />
          <${Route} path="/orders" element=${html`<${Orders} />`} />
        </${Routes}>
      </${Router}>
    </${CartProvider}>
  `;
};

export default App;
