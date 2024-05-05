import React from 'react'
import './Footer.css'
import logo from '../../images/logo.png'
import { ImFacebook } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import visa from '../../images/Brands.png'



function Footer() {
    return (
        <div className='footer'>
            <div className="footer__top container">
                <div className="footer__card">
                    <img src={logo} alt="" />
                    <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br /> Ipsum has been the industry's standard <br /> dummy text ever.Since the 1500s, when <br /> an unknown printer.</p>
                </div>
                <div className="footer__card">
                    <h2>Follow Us</h2>
                    <p>Since the 1500s, when an unknown <br /> printer took a galley of type and <br /> scrambled.</p>
                    <div className="footer__icon">
                        <ImFacebook />
                        <FaTwitter />
                    </div>
                </div>
                <div className="footer__card">
                    <h2>Contact Us</h2>
                    <p>E-Comm , 4578 <br /> Marmora Road,<br /> Glasgow D04 89GR</p>
                </div>
            </div>
            <div className="footer__bootm container">
                <div className="footer__card">
                    <h2>Infomation</h2>
                    <p>
                        About Us <br />
                        Infomation <br />
                        Privacy Policy <br />
                        Terms & Conditions <br />
                    </p>
                </div>
                <div className="footer__card">
                    <h2>Infomation</h2>
                    <p>
                        About Us <br />
                        Infomation <br />
                        Privacy Policy <br />
                        Terms & Conditions <br />
                    </p>
                </div>
                <div className="footer__card">
                    <h2>Infomation</h2>
                    <p>
                        About Us <br />
                        Infomation <br />
                        Privacy Policy <br />
                        Terms & Conditions <br />
                    </p>
                </div>
                <div className="footer__card">
                    <h2>Infomation</h2>
                    <p>
                        About Us <br />
                        Infomation <br />
                        Privacy Policy <br />
                        Terms & Conditions <br />
                    </p>
                </div>
            </div>
            <div className="plast__card container">
                <img src={visa} alt="" />
            </div>
        </div>
    )
}

export default Footer