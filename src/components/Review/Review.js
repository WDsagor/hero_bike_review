import React from 'react';
import { useReview } from '../../hooks/useReview';

import Comment from '../Comment/Comment';
import './Review.css'


const Review = () => {
    const [reviews, setReviews] = useReview();
    return (
        <div>
            <h1>Comments Area</h1>
            <h1> Total Review {reviews.length}</h1>
            <div className='comment-area'>
            {
                reviews.map(comment=> <Comment
                key={comment.id}
                comment={comment}
                ></Comment>)
            }

            </div>
            
        </div>
    );
};

export default Review;