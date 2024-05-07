import React from 'react'
import './Hero.css'
import rasm1 from '../../images/product.png'
import rasm2 from '../../images/product1.png'
import rasm3 from '../../images/product2.png'

function Hero() {
    return (
        <>
            <div className="hero__img"></div>
            <div className="container">
                <div className="hero__wrapper">
                    <div className="hero__card">
                        <h2>FS - QUILTED MAXI CROSS BAG</h2>
                        <img src={rasm1} alt="skjnjdsjfj" />
                        <div className="price">
                            <h2>$534,33</h2>
                            <h3>24% Off</h3>
                            <h1>$299,43</h1>
                        </div>
                    </div>
                    <div className="hero__carrd">
                        <h2>FS - Nike Air Max 270 React...</h2>
                        <img src={rasm2} alt="skjnjdsjfj" />
                        <div className="price">
                            <h2>$534,33</h2>
                            <h3>24% Off</h3>
                        </div>
                    </div>
                    <div className="hero__carrd">
                        <h2>FS - Nike Air Max 270 React...</h2>
                        <img src={rasm3} alt="skjnjdsjfj" />
                        <div className="price">
                            <h2>$534,33</h2>
                            <h3>24% Off</h3>
                            <h1>$299,43</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero