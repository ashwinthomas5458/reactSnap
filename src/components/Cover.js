import React from 'react';

function Cover(){
    return(
        <div className="cover">
            <div className="cover rings">
                <img src="svgs/Ellipse 1.svg" alt=""/>
                <img src="svgs/Ellipse 2.svg" alt=""/>
                <img src="svgs/Ellipse 3.svg" alt=""/>
            </div>
            <div className="cover coverContent flex">
                <div className="content flex">
                    <h1>Watch & Learn from Experts.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Avitae, quis arcu donec risus vestibulum. </p>
                    <button className="login">Login with Gmail <img src="svgs/Arrow 1.svg" alt=""/></button>
                </div>
                <img src="Rectangle 101.png" alt=""/>
            </div>
        </div>
    )
}

export default Cover;