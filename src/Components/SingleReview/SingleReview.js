import React from 'react';
import "./SingleReview.css"
const SingleReview = ({review}) => {
    const {name,rating,description} = review;
    // const {review} = props;
    console.log(review);
    return (
        <div className='single-review'>
            
            <p>Rating: <span className='rating'>{rating}</span></p>
            <p>Review: {description}</p>
            <p>By <span className='reviewer-name'>{name}</span></p>
        </div>
    );
};

export default SingleReview;