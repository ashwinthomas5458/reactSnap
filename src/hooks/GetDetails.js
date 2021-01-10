import { useState, useEffect } from 'react';

const GetDetails = (id) => {
    const [data, setData] = useState([]);
    const [idVal, setID] = useState(id)
  
    useEffect(() => {
        allCourses();
    }, []);

    const allCourses = async ()=>{
        // var vars = [], hash;
		// var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		// for(var i = 0; i < hashes.length; i++){
		// 	hash = hashes[i].split('=');
		// 	vars.push(hash[0]);
		// 	vars[hash[0]] = hash[1];
		// }
        const type = {"id": `${idVal}`};
        const response = await fetch('https://j4b1yj8zg7.execute-api.ap-south-1.amazonaws.com/dev/api/v1/user/course/detail', {method:'POST', body:JSON.stringify(type)});
        const value = await response.json();
        await setData(value.data);
    } 
  
    return { data};
  }
  
  export default GetDetails;