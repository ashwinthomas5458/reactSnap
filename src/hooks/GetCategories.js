import { useState, useEffect } from 'react';

const GetCategories = () => {
    const [courseCategories, setCourses] = useState([]);
  
    useEffect(() => {
        courseCat();
    }, []);

    const courseCat = async ()=>{
        const response = await fetch('https://j4b1yj8zg7.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/course-category/get-all');
        const value = await response.json();
        await setCourses(value.data);
    } 
  
    return { courseCategories };
  }
  
  export default GetCategories;