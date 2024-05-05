import React from 'react'
import './Main.css'
import rasm1 from '../../images/shipping.png'
import rasm2 from '../../images/refund.png'
import rasm3 from '../../images/support.png'

function Main() {
    return (
        <div>
            <div className="container">
                <div className="main__top">
                    <div className="main__top__card">
                        <img src={rasm1} alt="wmkdmak" />
                        <h3>FREE SHIPPING</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="main__top__card">
                        <img src={rasm2} alt="" />
                        <h3>100% REFUND</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="main__top__card">
                        <img src={rasm3} alt="" />
                        <h3>SUPPORT 24/7</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main