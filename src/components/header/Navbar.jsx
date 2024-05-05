import React from 'react'
import './Navbarr.css'
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import SearchIcon from '@mui/icons-material/Search';

function Navbarr() {
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
                            <Link to={"/wishtlist"}>
                                <Badge badgeContent={1} color="secondary">
                                    <FavoriteBorderOutlinedIcon />
                                </Badge>
                            </Link>
                            <Link to={"/cart"}>
                                <Badge badgeContent={1} color="secondary">
                                    <ShoppingCartTwoToneIcon />
                                </Badge>
                            </Link>
                        </div>
                        <div className="kons">
                            <h2> Items</h2>
                            <h3>$0.00</h3>
                            <SearchIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbarr