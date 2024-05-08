import React, { useEffect, useState } from 'react'
import axios from '../../api'
import { API_URL } from '../../static'
import Products from '../../components/products/Products'
import './Home.css'
import Hero from '../../components/hero/Hero'
import Banner from '../../components/banner/Banner'
import Main from '../../components/main/Main'


function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        axios
            .get(API_URL)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
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