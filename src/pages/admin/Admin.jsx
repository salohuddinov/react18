import React, { useEffect } from 'react'
import './Admin.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Admin() {
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("token")
        navigate('/login')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='container'>
            <div className="admn">
                <Link to={'/'}><h2>Home / </h2></Link>
                <Link to={"/contactus"}><h2>Contact Us</h2></Link>

            </div>
            <div className="admin">
                <h2>Admin panel</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cupiditate inventore, deserunt magnam provident dolores blanditiis ullam iusto! Assumenda dolor quis itaque commodi tempore laudantium quam deleniti id consequatur. Minus delectus officia unde quam nulla ut. Odit quibusdam quis aut enim delectus blanditiis, quisquam quidem maiores suscipit. Dignissimos, ut repudiandae!</p>
                <button onClick={handleLogout}>Log out</button>
            </div>
        </div>
    )
}

export default Admin