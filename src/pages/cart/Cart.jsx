import React from 'react';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { incCart, decCart, removeFromCard } from '../../context/cartSlice';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import not from '../../images/not.png'
import logo1 from '../../images/card.png'
import logo2 from '../../images/paypal.png'
import logo3 from '../../images/bank.png'


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Cart = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    toast.success("sizning so'rovingiz qabul qilindi yaqin daqiqalarda javobi keladi", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark"
    },)
  };


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
      <div className="card__content">
        <form className="content__lrft">
          <input type="text" placeholder='Voucher code' />
          <button type='button'>Redeem</button>
        </form>
        <div className="content__right">
          <div className="sub">
            <h4>Subtotal</h4>
            <h4>$998</h4>
          </div>
          <div className="sub">
            <h4>Shipping fee</h4>
            <h4>$20</h4>
          </div>
          <div className="sub">
            <h4>Coupon</h4>
            <h4>No</h4>
          </div>
          <div className="sub">
            <h2>TOTAL</h2>
            <h2>$118</h2>
          </div>
          <Button variant="outlined" onClick={handleClickOpen}>Check out</Button>
        </div>
        <Dialog className='checkout'
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <h1>Make Payment</h1>
          <form className='checkout__form' action="">
            <div className="fullname">
              <input type="text" placeholder='First Name' />
              <input type="text" placeholder='Last Name' />
            </div>
            <div className="adrec">
              <input type="text" placeholder='Email Address' />
              <input type="text" placeholder='Mobile Phone' />
            </div>
            <textarea placeholder='Address for Delivery'></textarea>
            <div className="select__card">
              <div className="select__title">
                <img src={logo1} alt="" />
                <h4>Credit Card Or Debit</h4>
              </div>
              <input type="checkbox" />
            </div>
            <div className="select__card">
              <div className="select__title">
                <img src={logo2} alt="" />
                <h4>Paypal</h4>
              </div>
              <input type="checkbox" />
            </div>
            <div className="select__card">
              <div className="select__title">
                <img src={logo3} alt="" />
                <h4>Bank Transfer</h4>
              </div>
              <input type="checkbox" />
            </div>
          </form>
          <button onClick={handleClose}>Go to Payment</button>
        </Dialog>
      </div>
    </div>
  );
}

export default Cart;
