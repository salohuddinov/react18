import React from 'react'
import './Main.css'
import rasm1 from '../../images/shipping.png'
import rasm2 from '../../images/refund.png'
import rasm3 from '../../images/support.png'
import rasm4 from '../../images/nike.png'
import rasm5 from '../../images/figma.png'



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
                <h2 className='news'>LATEST NEWS</h2>
                <div className="main__centr">
                    <div className="main__centr__card">
                        <img src={rasm4} alt="" />
                        <div className="main__centr__right">
                            <h4>01 Jan, 2015</h4>
                            <h3>Fashion Industry</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="main__centr__card">
                        <img className='main__centr__img' src={rasm5} alt="" />
                        <div className="main__centr__right">
                            <h4>01 Jan, 2015</h4>
                            <h3>Best Design Tools</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div><div className="main__centr__card">
                        <div className="main__centr__right">
                            <h4>01 Jan, 2015</h4>
                            <h3>HR Community</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
                <form className='main__form'>
                    <input type="text" placeholder='Search query...' />
                    <button type='button'>Search</button>
                </form>
            </div>
        </div>
    )
}

export default Main