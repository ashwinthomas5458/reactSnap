import React from 'react';
import GetCategories from '../hooks/GetCategories';
import GetCourses from '../hooks/GetCourses';
import Featured from './Featured';
import CourseCategories from './CourseCategories';
import Popular from './Popular';
import OfferIncluded from './OfferIncluded';
import MobileApp from './MobileApp';


function Body(){

    const { courseCategories } = GetCategories();
    const { featuredCourses, popularCourses, offerCourses } = GetCourses();
    

    return(
        <>
            <Featured featured={featuredCourses}/>
            <CourseCategories courseCategories={courseCategories}/>
            <Popular popular={popularCourses}/>
            <OfferIncluded offer={offerCourses}/>
            <MobileApp/>
        </>
    );
};

export default Body;