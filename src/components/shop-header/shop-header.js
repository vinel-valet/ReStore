import React from 'react';
import './shop-header.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const ShopHeader = ({ numItems }) => {
    const {orderTotal, orderCount} = useSelector(state => state)
  return (
    <header className="shop-header row">
      <Link to='/' className="logo text-dark" href="#">ReStore</Link>
      <Link to='/cart/' className="shopping-cart">
        <i className="cart-icon fa fa-shopping-cart" />
        {orderCount} items (${orderTotal})
      </Link>
    </header>
  );
};

export default ShopHeader;