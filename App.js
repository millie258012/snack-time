import React from 'react';
import htm from 'htm';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash.js';
import Home from './pages/Home.js';
import ProductDetails from './pages/ProductDetails.js';
import Cart from './pages/Cart.js';
import Profile from './pages/Profile.js';
import Orders from './pages/Orders.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import { CartProvider } from './context/CartContext.js';
import { AuthProvider } from './context/AuthContext.js';

const html = htm.bind(React.createElement);

const App = () => {
  return html`
    <${AuthProvider}>
      <${CartProvider}>
        <${Router}>
          <${Routes}>
            <${Route} path="/" element=${html`<${Splash} />`} />
            <${Route} path="/home" element=${html`<${Home} />`} />
            <${Route} path="/product/:id" element=${html`<${ProductDetails} />`} />
            <${Route} path="/cart" element=${html`<${Cart} />`} />
            <${Route} path="/profile" element=${html`<${Profile} />`} />
            <${Route} path="/orders" element=${html`<${Orders} />`} />
            <${Route} path="/login" element=${html`<${Login} />`} />
            <${Route} path="/register" element=${html`<${Register} />`} />
          </${Routes}>
        </${Router}>
      </${CartProvider}>
    </${AuthProvider}>
  `;
};

export default App;
