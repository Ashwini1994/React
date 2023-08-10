export const shuffleOptions = question => {
    const unshuffledOptions = [
        question.correctAnswer,
        ...question.incorrectAnswers
    ];
    return unshuffledOptions.map((unshuffledOption) => ({
        sort: Math.random(),
        value: unshuffledOption,
    }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

};

export const normalizeQuestions = (backendQuestions) => {
    return backendQuestions.map(backendQuestion => {
        const incorrectAnswers = backendQuestion.incorrect_answers.map(
            incorrectAnswer => decodeURIComponent(incorrectAnswer)
        );
        return {
            correctAnswer: decodeURIComponent(backendQuestion.correct_answer),
            question: decodeURIComponent(backendQuestion.question),
            incorrectAnswers,
        };

    });
};
