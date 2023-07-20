import { useState } from "react";
import Question from "./Question";

const Quiz = () => {
    const [question, setQuestion] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    console.log('currentQuestionIndex is ', currentQuestionIndex);
    return (
        <div className="quiz">
            <div className="score" >Question 1/8</div>
            <Question />
            <div
                className="next-button"
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
            >Next Question
            </div>
        </div>
    );
};

export default Quiz;