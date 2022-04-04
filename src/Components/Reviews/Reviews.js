import React from 'react';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import "./Reviews.css"

const Reviews = () => {
    const [reviews] = useReviews();
    console.log(reviews);
    return (
        <div className='review-container'>
            {/* <h1>review</h1> */}
            {
                reviews.map(review => <SingleReview
                    key={review.id}
                    review={review}>

                </SingleReview>)
            }
        </div>
    );
};

export default Reviews;