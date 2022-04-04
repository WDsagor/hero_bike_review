import React from 'react';
import './Comment.css'

const Comment = (props) => {
    console.log(props);
    const {name, comments } = props.comment
    const {comment, date } = comments
    return (
        <div className='comment-details'>
            <h4>{name}</h4>
            <p>{comment}</p>
            <small><b>Comment date: </b> {date}</small>

        </div>
    );
};

export default Comment;