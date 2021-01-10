import React from 'react';
import Cover from '../components/Cover';
import Body from '../components/Body';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <>
            <Helmet>
                <title>Interview task : Home</title>
                <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Avitae, quis arcu donec risus vestibulum. " />
                    <meta property="og:type" content="website"/>
                        <meta property="og:url" content=""/>
                        <meta property="og:title" content="Interview task : Home"/>
                        <meta property="og:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Avitae, quis arcu donec risus vestibulum. "/>
                        <meta property="og:image" content="Cover.png"/>
                        <meta property="twitter:card" content="summary_large_image"/>
                        <meta property="twitter:url" content=""/>
                        <meta property="twitter:title" content="Interview task : Home"/>
                        <meta property="twitter:description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Avitae, quis arcu donec risus vestibulum. "/>
                        <meta property="twitter:image" content="Cover.png"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap"
                    rel="stylesheet" />
            </Helmet>
            <Cover />
            <Body />
        </>
    );
}

export default Home;