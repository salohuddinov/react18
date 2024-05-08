import React, { useEffect } from 'react';
import './Cart.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { incCart, decCart, removeFromCard } from '../../context/cartSlice';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import not from '../../images/empty.png'
import logo1 from '../../images/card.png'
import logo2 from '../../images/paypal.png'
import logo3 from '../../images/bank.png'


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';

const BOT_TOKEN = "7060301731:AAFUiEIF-Hs_s5zEwb_kulUMJGkpLLC2dxw";
// const USER__ID = "1186183770";
const CHAT_ID = "-1002035416931";
// updates: https://api.telegram.org/bot7060301731:AAFUiEIF-Hs_s5zEwb_kulUMJGkpLLC2dxw/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Cart = () => {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
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
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  let total = 0;

  let itemss = cart?.map((el, index) => {
    const subtotal = el.price * el.quantity; // Calculate subtotal for each item
    total += subtotal;
  });

  const handleOrder = () => {
    let text = "Buyurtma %0A%0A";
    text += ` Ism: ${name} %0A`;
    text += `Familiya: ${lastName} %0A`;
    text += `Email: ${email} %0A`;
    text += `Telefon raqami: ${phone} %0A`;
    cart.forEach((product) => {
      text += `${product.title} %0A`;
      text += `Narxi: ${product.price} %0A`;
      text += `Soni: ${product.quantity} %0A`;
      text += `Jami: ${product.price * product.quantity} %0A`;
      text += `%0A%0A`;
    });
    text += `Jami narxi: ${calculateTotalPrice()}`;
    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setShowOverlay(false);
    cart.forEach((product) => {
      dispatch(removeFromCard(product));
    });
    setOpen(false);
    toast.success("sizning so'rovingiz qabul qilindi yaqin daqiqalarda javobi keladi", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark"
    },)
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
        <h3>{(el.price * el.quantity).toFixed(1)}</h3>
      </div>
      <button onClick={() => dispatch(removeFromCard(el))}> <DeleteIcon /> </button>
    </div>
  ));

  const cardContent =
    (<div div className="card__content" >
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
          <h2>${total.toFixed(1)}</h2>
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
            <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='First Name' />
            <input onChange={(e) => lastName(e.target.value)} value={lastName} type="text" placeholder='Last Name' />
          </div>
          <div className="adrec">
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='Email Address' />
            <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" placeholder='Mobile Phone' />
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
        <button onClick={handleOrder}>Go to Payment</button>
      </Dialog>
    </div >);

  let cartContent;
  if (cartItems.length === 0) {
    cartContent = (<img className='cart__empty' src={not} alt="hbjhbhj" />

    );
  } else {
    cartContent = <div className="carts">{cartItems} {cardContent}</div>;
  }

  return (
    <div className="container">
      {cartContent}
    </div>
  );
}

export default Cart;
