import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import ProductList from './ProductList';
import BuyProductPage from './BuyProductPage';
import Cart from './Cart';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Shopping Cards</h1>
          </header>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/buy/:productId" element={<BuyProductPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;