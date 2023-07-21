import Answer from "./Answer";

import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";

const Question = () => {

    const [quizState] = useContext(QuizContext);
    console.log('In question: quizstate:', quizState);

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

    return (
        <div>
            <div className="question">{currentQuestion.question}</div>
            <div className="answers">
                <Answer />
                <Answer />
                <Answer />
                <Answer />
            </div>

        </div>
    );
};

export default Question;