import React from 'react';

import HomeHeader from '../HomeHeaderSection/HomeHeader';
import HomeReview from '../HomeReview/HomeReview';
import "./Home.css"

const Home = () => {
    
    return (
        <div >
         <HomeHeader></HomeHeader>
         <HomeReview></HomeReview>

        </div>
    );
};

export default Home;