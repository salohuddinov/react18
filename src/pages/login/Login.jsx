import React, { useState, useEffect } from 'react'
import './Login.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";




function Login() {
    const LOGIN = "https://fakestoreapi.com"
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState("mor_2314")
    const [password, setPassword] = useState("83r5^_")

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!username.trim() || !password.trim()) {
            return toast.warn("Malumot to'liq emas")
        }
        let user = { username, password }
        axios
            .post(`${LOGIN}/auth/login`, user)
            .then(res => {
                console.log(res);
                toast.success("welcome", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark"
                },
                    localStorage.setItem("token", res.data.token),
                    navigate("/admin")
                )
            })
            .catch(err => {
                console.log(err);
                toast.error("username or password is incorrect", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "dark"
                })
            })
    }

    return (
        <div className='container'>
            <div className="login">
                <form onSubmit={handleSubmit} className='loging'>
                    <h3>Username</h3>
                    <br />
                    <input required value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' />
                    <br />
                    <h3>Password</h3>
                    <br />
                    <div className="paswword">
                        <input required value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} placeholder='Enter Your password' />
                        {
                            password &&
                            <button className='paswword__button' onClick={() => setShowPassword(p => !p)} type='button'>
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        }
                    </div>
                    <button className='loging__button' type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login