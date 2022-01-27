import React from 'react';
import './shopping-cart-table.css';
import {useDispatch, useSelector} from "react-redux";
import {bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart} from "../../actions";

const ShoppingCartTable = () => {

  const {cartItems : items, orderTotal : totals} = useSelector(state => state);
  const dispatch = useDispatch();

  const onIncrease = (id) => dispatch(bookAddedToCart(id));
  const onDelete = (id) => dispatch(allBooksRemovedFromCart(id));
  const onDecrease = (id) => dispatch(bookRemovedFromCart(id));

    return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
          <th>Count</th>
          <th>Price</th>
          <th className='action'>Action</th>
        </tr>
        </thead>

        <tbody>
        {items.map((item, idx) => {
          const {id, title, count, total} = item;
          return (
            <tr key={id}>
              <td>{idx + 1}</td>
              <td>{title}</td>
              <td>{count}</td>
              <td>{total}</td>
              <td>
                <button
                  onClick ={() => onDelete(id)}
                  className="btn btn-outline-danger btn-sm float-right">
                  <i className="fa fa-trash-o"/>
                </button>
                <button
                  onClick={() => onIncrease(id)}
                  className="btn btn-outline-success btn-sm float-right">
                  <i className="fa fa-plus-circle"/>
                </button>
                <button
                  onClick={() => onDecrease(id)}
                  className="btn btn-outline-warning btn-sm float-right">
                  <i className="fa fa-minus-circle"/>
                </button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>

      <div className="total">
        {totals}
      </div>
    </div>
  );
};

export default ShoppingCartTable;