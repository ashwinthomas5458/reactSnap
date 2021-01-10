import React from 'react';

function CourseDetail({data}){
    return(
        <div className="container course-detail text-dark py-5">
            <h1>Course Modules</h1>
            <div className="container pt-5">
                {
                    data?
                    <div className="row pt-5">
                    {data.map(card =>(
                        <div className="col-lg-6 pt-3">
                        <h2>{card.name}</h2>
                        <p>{card.id}</p>
                    </div>
                    ))
                    }
                </div>
                :
                null
                }
            </div>
        </div>
    )
}
export default CourseDetail;