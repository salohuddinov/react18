import React, { useEffect, useState } from 'react'
import './Single.css'
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux"
import axios from 'axios';
import { API_URL } from '../../static'
import { toggleToWishes } from "../../context/wishlistSlice"
import { addToCard } from "../../context/cartSlice";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import SingleBtm from "../../components/singlebtm/SingleBtm"
import Star from '../../components/star/Star';
import Singlewrapper from '../../components/singlewrapper/Singlewrapper';


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
                        <h2>Nike Airmax 270 React</h2>
                        <div className="starwrapper">
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
                            <h2>Submit a review</h2>
                        </div>
                        <div className="lings"></div>
                        <div className="pricee">
                            <h2>${product?.price}</h2>
                            <h3>$534,33</h3>
                            <p>{product?.rating.count}% off</p>
                        </div>
                        <div className="aboutproduct">
                            <h3>Availability:</h3>
                            <h3>In stock</h3>
                            <h3>Category:</h3>
                            <h3>Accessories</h3>
                            <h3>Free shipping</h3>
                        </div>
                        <div className="lings"></div>
                        <div className="collor">
                            <h3>Select Color:</h3>
                            <input type="color" />
                            <input type="color" />
                            <input type="color" />
                            <input type="color" />
                        </div>
                        <div className="size">
                            <h3>Size</h3>
                            <select className='size__select'>
                                <option value="XS">XS</option>
                                <option value="XS">X</option>
                                <option value="XS">S</option>
                                <option value="XS">M</option>
                            </select>
                        </div>
                        <form className='element'>
                            <div className='kenzo'>
                                <button type='button' className='button__span'>-</button>
                                <button type='button'>2</button>
                                <button type='button' className='button__span'>+</button>
                            </div>
                            <div className="add">
                                <button type='button' className='element__button' onClick={() => dispatch(addToCard(el))}>Add To Cart</button>
                                <button type='button' className='span__icons' onClick={() => dispatch(toggleToWishes(el))}><FavoriteBorderIcon /></button>
                            </div>
                        </form>
                        <div className="edlink">
                            <button className='edlink__button1'><FaFacebookF /> Share on Facebook</button>
                            <button className='edlink__button2'><FaTwitter /> Share on Twitter</button>
                        </div>
                    </div>
                    <div className="single__card">
                        <img src={product?.image} alt="nsjk" />
                        <Star />
                        <div className="pricce">
                            <h2>${product?.price}</h2>
                            <h3>$534,33</h3>
                        </div>
                        <div className="act"></div>
                    </div>
                </div>
                <div className="single__bootm">
                    <SingleBtm />
                </div>
                <Singlewrapper />
            </div >
        </>
    )
}

export default Single