import React from 'react'
import { Link } from 'react-router-dom';

function Card({image, author, offer, free, offerPrice, price, title, description, id}){
    return(
        <Link to={`/detail/${title.replace(/\s/g, '-')}`}> 
        <div className="card">
            <img src={image} alt="" className="cardImage" />
            <div className="marked flex">
                <img src="svgs/Vector.svg" alt="" />
            </div>
            <div className="name flex">
                <p>{author}</p>
            </div>
            <div className={offer? "offer flex": "hidden"}>
                <p>offer</p>
            </div>
            <div className="text flex">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="star flex">
                <img src="svgs/Vector-1.svg" alt="" />
                <p>4.5</p>
            </div>
            <div className="price flex">
                <p className={free? "hidden": ""}>₹{offerPrice}</p>
                <p>{free? "free":`₹${price}`}</p>
            </div>
        </div>
        </Link>
    );
};

export default Card;