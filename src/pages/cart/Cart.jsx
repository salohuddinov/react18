import React from 'react'
import './Cart.css'
import { useSelector, useDispatch } from 'react-redux'
import { incCart, decCart, removeFromCard } from '../../context/cartSlice'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {
  let cart = useSelector((state) => state.cart.value)
  const dispatch = useDispatch()

  const handleDecerment = (el) => {
    if (el.quantity <= 1) {
      dispatch(removeFromCard(el))
    } else {
      dispatch(decCart(el))
    }
  }

  let items = cart?.map((el) =>
    <div key={el.id} className='items'>
      <div className="items__img">
        <img className='cart__img' src={el.image} width={100} alt={el.brand} />
        <p>{el.title}</p>
      </div>
      <h3> {el.price} </h3>
      <div className="inc__dec">
        <h4> {el.quantity} </h4>
        <div className="dec">
          <button onClick={() => dispatch(incCart(el))}> <KeyboardArrowUpIcon /> </button>
          <button onClick={() => handleDecerment(el)}> <KeyboardArrowDownIcon /> </button>
        </div>
      </div>
      <div className="subtotal">
        <h3>{el.price * el.quantity}</h3>
      </div>
      <button onClick={() => dispatch(removeFromCard(el))}> <DeleteIcon /> </button>
    </div>
  );
  return (
    <>
      <div className="container">
        <div className="carts">
          {items}
        </div>
      </div>
    </>
  )
}

export default Cart