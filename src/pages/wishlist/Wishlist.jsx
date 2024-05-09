import React, { useEffect } from 'react';
import './Wishlist.css';
import { useSelector } from 'react-redux';
import { wishlistSlice } from '../../context/wishlistSlice';
import Products from '../../components/products/Products';
import not from '../../images/wishlist.png';

const Wishlist = () => {
  const wishes = useSelector(state => state.wishlist.value);
  const hasWishes = wishes.length > 0;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="wishlist-container">
      {hasWishes ? (
        <Products data={wishes.map(wish => wish.product)} />
      ) : (
        <img className="not" src={not} alt="No items in wishlist" />
      )}
    </div>
  );
};

export default Wishlist;
