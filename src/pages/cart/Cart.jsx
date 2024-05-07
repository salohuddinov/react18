import React from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { incCart, decCart, removeFromCard } from '../../context/cartSlice';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import not from '../../images/not.png'

const Cart = () => {
  let cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  const handleDecrement = (el) => {
    if (el.quantity <= 1) {
      dispatch(removeFromCard(el));
    } else {
      dispatch(decCart(el));
    }
  };

  let cartItems = cart?.map((el) => (
    <div key={el.id} className='items'>
      <div className="items__img">
        <img className='cart__img' src={el.image} width={100} alt={el.brand} />
        <p>{el.title}</p>
      </div>
      <h3>{el.price}</h3>
      <div className="inc__dec">
        <h4>{el.quantity}</h4>
        <div className="dec">
          <button onClick={() => dispatch(incCart(el))}> <KeyboardArrowUpIcon /> </button>
          <button onClick={() => handleDecrement(el)}> <KeyboardArrowDownIcon /> </button>
        </div>
      </div>
      <div className="subtotal">
        <h3>{el.price * el.quantity}</h3>
      </div>
      <button onClick={() => dispatch(removeFromCard(el))}> <DeleteIcon /> </button>
    </div>
  ));

  let cartContent;
  if (cartItems.length === 0) {
    cartContent = <img className='not' src={not} alt="hbjhbhj" />;
  } else {
    cartContent = <div className="carts">{cartItems}</div>;
  }

  return (
    <div className="container">
      {cartContent}
    </div>
  );
}

export default Cart;
