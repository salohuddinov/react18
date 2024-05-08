import React, { useEffect } from 'react'
import './ContactUs.css'

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="container">
                <div className="contact">
                    <div className="form__title">
                        <h1>Get in touch</h1>
                        <div className="datas">
                            <h2>contact@e-comm.ng</h2>
                            <h2>+234 4556 6665 34</h2>
                            <h2>
                                20 Prince Hakerem Lekki Phase 1, Lagos.
                            </h2>
                        </div>
                        <button className='radus'>.</button>
                    </div>
                    <form className='contact__form' action="">
                        <div className="name">
                            <label>Fullname</label>
                            <input type="text" placeholder="Fullname" />
                        </div>
                        <div className="name">
                            <label>Email</label>
                            <input type="text" placeholder="jamesdoe@gmail.com" />
                        </div>
                        <div className="message">
                            <label>Subject</label>
                            <textarea></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs