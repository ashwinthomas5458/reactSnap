import React from 'react'

function Cat({courseCategory}){
    return(
        <>
        <button className="course">{courseCategory}</button>
        </>
    );
};

export default Cat;