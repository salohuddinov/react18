import React from 'react'
import './Navbarr.css'
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from "react-redux";


function Navbarr() {
    const wishes = useSelector((state) => state.wishlist.value);
    const carts = useSelector((state) => state.cart.value);
    return (
        <>
            <div className="container">
                <div className="headerr">
                    <div className="header__left">
                        <h2>EN <ArrowDropDownIcon /></h2>
                        <h2>USD <ArrowDropDownIcon /></h2>
                    </div>
                    <div className="header__right">
                        <div className="header__icons">
                            <Link to={"/admin"} > <PersonOutlineIcon /> </Link>
                            <Link className='navlink' to={"/wishlist"}>
                                <FavoriteBorderOutlinedIcon className='nac__icon' />
                                {wishes.length > 0 ? (
                                    <sup>
                                        <p className='sup__p'>{wishes.length}</p>
                                    </sup>
                                ) : (
                                    <></>
                                )}
                            </Link>
                            <Link className='navlink' to={"/cart"}>
                                <ShoppingCartTwoToneIcon className='nac__icon' />
                                {carts.length > 0 ? (
                                    <sub>
                                        <p className='sup__p'>{carts.length}</p>
                                    </sub>
                                ) : (
                                    <></>
                                )}
                            </Link>
                        </div>
                        <div className="kons">
                            <h2> Items</h2>
                            <h3>$0.00</h3>
                            <SearchIcon />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Navbarr