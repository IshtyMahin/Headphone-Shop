import React from 'react';
import "../../Images/headphone.jpg"
import './HomeHeader.css'
const HomeHeader = () => {
    return (
        <div className='home-container'>
            <div >
                <h1>Buy your favourite Headphone</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis dolores illo tempora quibusdam. Inventore illum at modi eos dolorem sint repellendus consequuntur error?</p>
            </div>
            <img src={require('../../Images/headphone.jpg')} alt="" />
        </div>
    );
};

export default HomeHeader;