const Answer = ({ optionsText, onSelectOption, index, currentAnswer, correctAnswer }) => {
    const letterMapping = ['A', 'B', 'C', 'D'];
    const isCorrectAnswer = currentAnswer && optionsText === correctAnswer;
    const isWrongAnswer = currentAnswer === optionsText && currentAnswer !== correctAnswer;

    // Wrong because this logic highlights all the wrong options instead of just the selected option
    //const isWrongAnswer = currentAnswer && optionsText !== correctAnswer;

    const correctAnswerClass = isCorrectAnswer ? 'correct-answer' : '';
    const wrongAnswerClass = isWrongAnswer ? 'wrong-answer' : '';
    const disabledClass = currentAnswer ? 'disabled-answer' : '';
    return (
        <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
            onClick={() => onSelectOption(optionsText)}>
            <div className="answer-letter">{letterMapping[index]}</div>
            <div className="answer-text">{optionsText}</div>
        </div>
    );
};

export default Answer;