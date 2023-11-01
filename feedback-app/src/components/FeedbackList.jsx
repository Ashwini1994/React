import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
    {
        !feedback || feedback.length &&
            <p>No Feedback yet</p>;
    }

    return (
        <div className='feedback-list'>
            {feedback.map((item) => (
                <FeedbackItem key={item.id} item={item} />

            ))}

        </div>
    );
}

export default FeedbackList;
