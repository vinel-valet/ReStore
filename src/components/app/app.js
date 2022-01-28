import React from 'react';
import {Routes,Route} from 'react-router-dom'
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ShopHeader from '../shop-header/shop-header';


const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader/>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/cart/' element={<CartPage/>} />
    </Routes>
    </main>
  )
};

export default App;