import React from 'react'
import './Banner.css'
import rasm from '../../images/tufli.png'

function Banner() {
    return (
        <div className='container'>
            <div className="banner__bg">
                <div className="banner">
                    <div className="banner__left">
                        <h2>Adidas Men RunningSneakers</h2>
                        <p>Performance and design. Taken right to the edge.</p>
                        <button>SHOP NOW</button>
                    </div>
                    <div className="banner__right">
                        <img src={rasm} alt="fjnndfjsn" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner