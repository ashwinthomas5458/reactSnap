import React from 'react';

function MobileApp(){
    return(
        <div className="section">
            <div className="rings section">
                <img src="svgs/Ellipse 6.svg" alt=""/>
                <img src="svgs/Ellipse 7.svg" alt=""/>
            </div>
            <div className="content flex">
                <h1>Get our mobile app</h1>
                <p>Download our mobile app for more personalised experience.</p>
                <p>Available on</p>
                <figure className="flex">
                    <a href="/">
                        <img src="svgs/Google Play - eng.svg" alt=""/>
                    </a>
                    <a href="/">
                        <img src="svgs/App Store - eng.svg" alt=""/>
                    </a>
                </figure>
            </div>
        </div>
    )
}
export default MobileApp;