import React from 'react';
import "../../Images/not found img.jpg"
import "./NotFound.css"
const NotFound = () => {
    return (
        <div className='notFound'>
            <img src={require('../../Images/not found img.jpg')} alt="" />
        </div>
    );
};

export default NotFound;