import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CourseCategories from '../components/CourseCategories';
import CourseDetail from '../components/CourseDetail';
import Cover from '../components/Cover';
import GetDetails from '../hooks/GetDetails';

function Detail({id}) {
    const {data} = GetDetails(id);

    return (
        <>
               { !data?
               <>
                    <Helmet>
                    <title>{`Details `}</title>
                    <meta property="og:type" content="website"/>
                        <meta property="og:url" content=""/>
                        <meta property="og:title" content="Details"/>
                        <meta property="og:description" content=""/>
                        <meta property="og:image" content="login-bg.jpg"/>
                        <meta property="twitter:card" content="summary_large_image"/>
                        <meta property="twitter:url" content=""/>
                        <meta property="twitter:title" content="Details"/>
                        <meta property="twitter:description" content=""/>
                        <meta property="twitter:image" content="login-bg.jpg"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
                        rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap"
                        rel="stylesheet" />
                </Helmet>
                <div className="container d-flex align-items-center justify-content-center text-dark" style={{height:"100vh"}}>
                    INVALID ID
                </div>
                </>
               : 
               <>
               <Helmet>
                    <title>{`Details : ${data.creator}`}</title>
                    <meta name="description" content={data.description} />
                    <meta property="og:type" content="website"/>
                        <meta property="og:url" content=""/>
                        <meta property="og:title" content={`Details : ${data.creator}`}/>
                        <meta property="og:description" content=""/>
                        <meta property="og:image" content="Cover.png"/>
                        <meta property="twitter:card" content="summary_large_image"/>
                        <meta property="twitter:url" content=""/>
                        <meta property="twitter:title" content={`Details : ${data.creator}`}/>
                        <meta property="twitter:description" content=""/>
                        <meta property="twitter:image" content="Cover.png"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
                        rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap"
                        rel="stylesheet" />
                    
                </Helmet>
                <Cover/>
                <CourseDetail data={data.course_modules}/>
                </>}
        </>
    )
}

export default Detail;