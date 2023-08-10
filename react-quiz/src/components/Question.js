import Answer from "./Answer";

import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                {quizState.options.map((option, index) => (
                    <Answer
                        optionsText={option}
                        key={index}
                        index={index}
                        currentAnswer={quizState.currentAnswer}
                        correctAnswer={currentQuestion.correctAnswer}
                        onSelectOption={(optionsText) =>
                            dispatch({ type: 'SELECT_ANSWER', payload: optionsText })
                        }

                    />
                ))}
            </div>

        </div>
    );
};

export default Question;