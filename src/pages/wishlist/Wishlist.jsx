import React from 'react';
import './Wishlist.css';
import { useSelector } from 'react-redux';
import Products from '../../components/products/Products';
import not from '../../images/not.png';

const Wishlist = () => {
  const wishes = useSelector(state => state.wishlist.value);
  const hasWishes = wishes.length > 0;

  return (
    <div className="wishlist-container">
      {hasWishes ? (
        <Products data={wishes} />
      ) : (
        <div className="empty-wishlist">
          <img className="not" src={not} alt="No items in wishlist" />
          <p>Your wishlist is empty</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
