export const shuffleOptions = question => {
    const unshuffledOptions = [
        question.correctAnswer,
        ...question.incorrectAnswers
    ]
    return unshuffledOptions.map((unshuffledOption) => ({
        sort: Math.random(),
        value: unshuffledOption,
    }))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value);

};