import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../Hooks/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import "./HomeReview.css"

const HomeReview = () => {
    const [reviews] = useReviews();
    return (
        <div >
            <h1>Review (3)</h1>
             <div className='review-container'>
             {
                reviews.slice(0,3).map(review => <SingleReview
                    key={review.id}
                    review={review}>
                </SingleReview>)
            }
             </div>
             <Link to="/reviews"><button className='review-btn' >See More Review</button></Link>
        </div>
    );
};

export default HomeReview;