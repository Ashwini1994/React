import { useContext, useEffect } from "react";
import Question from "./Question";
import { QuizContext } from "../contexts/quiz";


const Quiz = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    const apiUrl = 'https://opentdb.com/api.php?amount=20&category=10&difficulty=medium&type=multiple&encode=url3986';

    useEffect(() => {
        console.log('Initialize');
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                console.log('data:', data);
                dispatch(
                    {
                        type: "LOADED_QUESTIONS",
                        payload: data.results
                    });
            });
    }, []);

    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">Congratulations!!</div>
                    <div className="results-info">
                        <div>You've completed the quiz successfully! </div>
                        <div>Your score is {quizState.quizScore} of {quizState.questions.length}  </div>
                    </div>
                    <div
                        className="next-button"
                        onClick={() => dispatch({ type: "RESTART" })}
                    >Restart
                    </div>
                </div>)}
            {!quizState.showResults && quizState.questions.length > 0 && (
                <div>
                    <div className="score" >{`Question ${quizState.currentQuestionIndex + 1}/${quizState.questions.length}`}</div>
                    <Question />
                    <div
                        className="next-button"
                        onClick={() => dispatch({ type: "NEXT_QUESTION" })}
                    >Next Question
                    </div>
                </div>)}
        </div>
    );
};

export default Quiz;
