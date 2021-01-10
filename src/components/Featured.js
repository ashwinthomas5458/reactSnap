import React from 'react';
import Card from './Card';

function Featured({featured}){
    return(
        <div className="container featured flex">
            <figure className="flex">
                <h3>Featured Courses</h3>
                <a href="/" className="view">
                    View all
                    <svg width="25" height="8" viewBox="0 0 25 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24.3536 4.35355C24.5488 4.15829 24.5488 3.84171 24.3536 3.64645L21.1716 0.464466C20.9763 0.269204 20.6597 0.269204 20.4645 0.464466C20.2692 0.659728 20.2692 0.976311 20.4645 1.17157L23.2929 4L20.4645 6.82843C20.2692 7.02369 20.2692 7.34027 20.4645 7.53553C20.6597 7.7308 20.9763 7.7308 21.1716 7.53553L24.3536 4.35355ZM0 4.5H24V3.5H0V4.5Z"
                            fill="#000000" />
                    </svg>
                </a>
            </figure>
            <div className="list flex">
            <div className="grid">
                {featured.map(course=>(
                    <Card image={course.image} author={course.creator} offer={course.offer} free={course.free} offerPrice={course.offer_price} price={course.price} title={course.name} description={course.description? `${course.description.slice(0,20)}..`: "No description"} marked={course.is_bookmarked} key={`${course.creator_id}key${course.id}${course.name}`} id={course.id}/>
                ))}
            </div>
            </div>
        </div>
    );
};

export default Featured;