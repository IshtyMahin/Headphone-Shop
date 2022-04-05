import React from 'react';
import "../../Images/headphone.jpg"
import './HomeHeader.css'
const HomeHeader = () => {
    return (
        <div className='home-container'>
            <div className='home-title'>
                <h1>Buy your favourite Headphone</h1>
                <p>Buy latest Headphones at best price in Bangladesh. Get your Mobile Accessories from online shopping store pickaboo.com. COD. EMI. Easy Return. Shop Now.</p>
            </div>
            <img src={require('../../Images/headphone.jpg')} alt="" />
        </div>
    );
};

export default HomeHeader;