import React, { useEffect } from 'react';
import './Wishlist.css';
import { useSelector } from 'react-redux';
import Products from '../../components/products/Products';
import not from '../../images/wishlist.png';
import Singlewrapper from '../../components/singlewrapper/Singlewrapper';

const Wishlist = () => {
  const wishes = useSelector(state => state.wishlist.value);
  const hasWishes = wishes.length > 0;

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="wishlist-container">
      {hasWishes ? (
        <Products data={wishes} />
      ) : (
        <img className="not" src={not} alt="No items in wishlist" />
      )}
      <Singlewrapper />
    </div>
  );
};

export default Wishlist;
