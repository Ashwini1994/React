import { useContext } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";


const Quiz = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    console.log('QuizState:', quizState);

    return (
        <div className="quiz">
            <div className="score" >Question 1/8</div>
            <Question />
            <div
                className="next-button"
                onClick={() => dispatch({ type: "NEXT_QUESTION" })}
            >Next Question
            </div>
        </div>
    );
};

export default Quiz;