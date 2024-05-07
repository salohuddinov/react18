import React from 'react'
import { singlewrapper } from "../../static";
import Star from '../../components/star/Star';


const singlecard = singlewrapper?.map((el) => (
    <div className="single__card">
        <img src={el.url} alt={el.title} />
        <h2 className="title">{el.title}</h2>
        <Star />
        <div className="prc">
            <h2>{el.price}</h2>
            <h3>{el.oldPrice}</h3>
            <p>{el.count}</p>
        </div>
    </div>
));

function Singlewrapper() {
    return (
        <>
            <div className="single__wrapper">
                {singlecard}
            </div>
        </>
    )
}

export default Singlewrapper