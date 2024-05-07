import React, { useEffect, useState } from 'react'
import axios from '../../api'
import Products from '../../components/products/Products'
import './Home.css'
import Hero from '../../components/hero/Hero'
import Banner from '../../components/banner/Banner'
import Main from '../../components/main/Main'


function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get("products")
            .then(res => setData(res.data.products))
            .catch(res => console.log(res))
    }, [])

    return (
        <>
            <div className="container">
                <Hero />
                <Products title={"Yangi mahsulotlar"} data={data} />
                <Banner />
                <Main />
            </div>
        </>
    )
}

export default Home