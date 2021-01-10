import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    const [burgerActive, setBurger] = useState(false);
    const burgerClick = () =>{
        setBurger(!burgerActive);
    }

    const [searchBarOn, setSearch] = useState(false);
    const searchBar = () =>{
        if(window.innerWidth<450){
            setSearch(!searchBarOn);
        }
    }
    
    return(
        <header>
            <button className="logo">LOGO</button>
            <Link to='/'>
            <div className="categories flex">
                <img src="svgs/categories.svg" alt=""></img>
                <p>Categories</p>
            </div>
            </Link>
            <div className={searchBarOn?"search searchActive flex": "search"}>
                <svg onClick={searchBar} style={searchBarOn?{display: "none"}:{display: "unset"}} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5688 11.6813L10.25 9.38125C11.1501 8.25901 11.5859 6.83456 11.468 5.40081C11.3501 3.96706 10.6873 2.63299 9.61595 1.6729C8.54461 0.712818 7.14613 0.199695 5.70808 0.239045C4.27003 0.278396 2.9017 0.867227 1.88446 1.88446C0.867227 2.9017 0.278396 4.27003 0.239045 5.70808C0.199695 7.14613 0.712818 8.54461 1.6729 9.61595C2.63299 10.6873 3.96706 11.3501 5.40081 11.468C6.83456 11.5859 8.25901 11.1501 9.38125 10.25L11.6813 12.55C11.7394 12.6086 11.8085 12.6551 11.8846 12.6868C11.9608 12.7185 12.0425 12.7349 12.125 12.7349C12.2075 12.7349 12.2892 12.7185 12.3654 12.6868C12.4415 12.6551 12.5106 12.6086 12.5688 12.55C12.6814 12.4335 12.7444 12.2777 12.7444 12.1156C12.7444 11.9535 12.6814 11.7978 12.5688 11.6813ZM5.875 10.25C5.00971 10.25 4.16385 9.99341 3.44438 9.51268C2.72492 9.03195 2.16416 8.34867 1.83303 7.54924C1.50189 6.74981 1.41526 5.87015 1.58407 5.02148C1.75288 4.17281 2.16955 3.39326 2.78141 2.78141C3.39326 2.16955 4.17281 1.75288 5.02148 1.58407C5.87015 1.41526 6.74981 1.50189 7.54924 1.83303C8.34867 2.16416 9.03195 2.72492 9.51268 3.44438C9.99341 4.16385 10.25 5.00971 10.25 5.875C10.25 7.03532 9.78907 8.14812 8.96859 8.96859C8.14812 9.78907 7.03532 10.25 5.875 10.25Z"
                        fill="#B2B2B2" />
                </svg>
                <svg onClick={searchBar} style={searchBarOn?{display: "unset"}:{display: "none"}} version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" width="13" height="13" x="0px" y="0px" viewBox="0 0 13 13" enable-background="new 0 0 13 13">
                    <g>
                        <path 
                            d="M11.9,10.9c0.6,0.6-0.3,1.6-1,1c-1.5-1.5-3-3-4.4-4.4c-1.5,1.5-3,2.9-4.4,4.4c-0.6,0.6-1.6-0.3-1-1 c1.5-1.5,3-3,4.4-4.4C4.1,5,2.6,3.5,1.1,2.1c-0.6-0.6,0.3-1.6,1-1c1.5,1.5,3,3,4.4,4.4c1.5-1.5,3-2.9,4.4-4.4c0.6-0.6,1.6,0.3,1,1 c-1.5,1.5-3,3-4.4,4.4C8.9,8,10.4,9.5,11.9,10.9z"
                            fill="#B2B2B2" />
                    </g>
                </svg>
                <input type="search" style={searchBarOn?{display: "block"}:{}} placeholder="What do you want to learn?"></input>
            </div>
            <div className="nav flex" onClick={burgerClick}>
                <div className={burgerActive? "navLinks flex nav-active": "navLinks flex"}>
                    <a href="/" className={burgerActive? "navItems navItemsActive": "navItems"}>Join as Tutor</a>
                    <button className={burgerActive? "signup navItems navItemsActive": "signup navItems"}>Signup</button>
                    <button className={burgerActive? "login navItems navItemsActive": "login navItems"}>Login with Gmail</button>
                </div>
                <div className={burgerActive? "navicon x": "navicon"}>
                    <div className="line1 item"></div>
                    <div className="line2 item"></div>
                    <div className="line3 item"></div>
                </div>
            </div>
        </header>
    )
}

export default Nav;