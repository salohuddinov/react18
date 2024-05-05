import React, { useEffect, useState } from 'react'
import './Single.css'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux"
import axios from 'axios';
import { API_URL } from '../../static'
import { toggleToWishes } from "../../context/wishlistSlice"
import { addToCard } from "../../context/cartSlice";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function Single() {
    const [product, setProduct] = useState(null)
    const [loading, setLoding] = useState(false)
    const wishes = useSelector(state => state.wishlist.value)
    const { id } = useParams()

    useEffect(() => {
        window.scrollTo(0, 0)
        setLoding(true)
        axios
            .get(`${API_URL}/${id}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoding(false))
    }, [])

    if (loading) {
        return <div className="loading">
            <div class="loader">
                <div class="load-inner load-one"></div>
                <div class="load-inner load-two"></div>
                <div class="load-inner load-three"></div>
                <span class="text">Loading...</span>
            </div>

        </div>
    };

    return (
        <>
            <div className="container">
                <div className='singleproduct'>
                    <div className="images">
                        <img className='single__img' src={product?.image} alt="sg" />
                        <div className="imgs">
                            <img className='smal__img' src={product?.image} alt="hjbbhb" />
                            <img className='smal__img' src={product?.image} alt="hjbbhb" />
                            <img className='smal__img' src={product?.image} alt="hjbbhb" />
                            <img className='smal__img' src={product?.image} alt="hjbbhb" />
                        </div>
                    </div>
                    <div className="single__right">
                        <h2>Seeds Of Change Oraganic Quinoa, Brown</h2>
                        <div className="star">
                            <div class="rating">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text"></label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text"></label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text"></label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text"></label>
                                <input checked="" type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text"></label>
                            </div>
                            <p>({product?.rating.rate} Review)</p>
                        </div>
                        <div className="fost">
                            <h2 className='single__price'>$ {product?.price}</h2>
                            <h3>{product?.rating.count}</h3>
                        </div>
                        <p className='single__right__p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi,
                            odio minus dolore impedit fuga eum eligendi.
                        </p>
                        <div className="product__count">
                            <h2>Size/Weight :</h2>
                            <button>50kg</button>
                            <button>80kg</button>
                            <button>120kg</button>
                            <button>200kg</button>
                        </div>
                        <form className='element'>
                            <input className='element__inout' type="number" />
                            <h4 className='addtocart'>Add to cart</h4>
                            <button className='span__icons' onClick={() => dispatch(addToCard(el))}> <ShoppingCartOutlinedIcon /></button>
                            <button className='span__icons' onClick={() => dispatch(toggleToWishes(el))}>
                                {
                                    wishes.some(w => w.id === el.id) ?
                                        <FavoriteBorderIcon /> :
                                        <FavoriteOutlinedIcon />
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Single