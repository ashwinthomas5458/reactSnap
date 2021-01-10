import { useState, useEffect } from 'react';

const GetCourses = () => {
    const [featuredCourses, setFeatured] = useState([]);
    const [popularCourses, setPopular] = useState([]);
    const [offerCourses, setOffer] = useState([]);
  
    useEffect(() => {
        allCourses();
    }, []);

    const allCourses = async ()=>{
        const type = {"value": "featured"};
        const response = await fetch('https://j4b1yj8zg7.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/course/home', {method:'POST', body:JSON.stringify(type)});
        const value = await response.json();
        await setFeatured(value.data.featured_courses);
        await setPopular(value.data.popular_courses);
        await setOffer(value.data.course_with_offers);
    } 
  
    return { featuredCourses, popularCourses, offerCourses };
  }
  
  export default GetCourses;