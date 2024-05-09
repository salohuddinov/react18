import React, { useState, useEffect } from "react"
import './Products.css'
import axios from "../../api"
import { useDispatch, useSelector } from "react-redux"
import { toggleToWishes } from "../../context/wishlistSlice"
import { addToCard } from "../../context/cartSlice";
import { Link } from 'react-router-dom'
import { API_URL } from "../../static"
import Skeleton from '../skeleton/Skeleton'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Products = () => {
    const [data, setData] = useState([])
    const [count, setCount] = useState(4)
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const [categoryValue, setCategoryValue] = useState("all")
    const dispatch = useDispatch()
    const wishes = useSelector(state => state.wishlist.value)
    const cart = useSelector(state => state.cart.value)


    useEffect(() => {
        axios
            .get(`${API_URL}/categories`)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        setLoading(true)
        let url = categoryValue === "all" ?
            `${API_URL}?limit=${count}` :
            `${API_URL}/category/${categoryValue}?limit=${count}`
        axios
            .get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [count, categoryValue])

    const getCategory = (text) => {
        setCategoryValue(text)
        setData([])
    }

    let products = data?.map((el) =>
        <div key={el.id} className="cardd">
            <div class="card">
                <div class="icon">
                    <img src={el.image} alt="" />
                </div>
                <span>
                    <button className='span__icons' onClick={() => dispatch(addToCard(el))}>
                        {
                            cart.some(c => c.id === el.id) ?
                                <ShoppingCartIcon /> :
                                <ShoppingCartOutlinedIcon />
                        }
                    </button>
                    <button className='span__icons' onClick={() => dispatch(toggleToWishes(el))}>
                        {
                            wishes.some(w => w.id === el.id) ?
                                <FavoriteOutlinedIcon /> :
                                <FavoriteBorderIcon />
                        }
                    </button>
                </span>
            </div>
            <p>{el.category}</p>
            <Link to={`/single/${el.id}`}>
                <h2>{el.title}</h2>
            </Link>
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
            </div>
            <div className="pricee">
                <h3>${el.price}</h3>
                <h4>${el.rating.count}</h4>
                <h2>24% Off</h2>
            </div>
        </div >)
    let categoryItems = categories?.map((el, inx) => <li className='conculution__li' onClick={() => setCategoryValue(el)} key={inx}> {el} </li>)

    return (
        <div>
            <h2 className="product__title">BEST SELLER</h2>
            <ul className='conculution'>
                <li className='conculution__li' onClick={() => getCategory("all")}>All</li>
                {categoryItems}
            </ul>
            {loading && <Skeleton />}
            <div className="wrapper container">{products}</div>
            <button onClick={() => setCount(p => p + 4)} className='btn-see'>See more</button>
        </div>
    )
}

export default Products


