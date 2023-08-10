import { createContext } from "react";
import { useReducer } from "react";
import { normalizeQuestions, shuffleOptions } from "../helpers";

const initialState = {
    currentQuestionIndex: 0,
    questions: [],
    showResults: false,
    options: [],
    currentAnswer: '',
    quizScore: 0,
};

const reducer = (state, action) => {

    switch (action.type) {
        case 'NEXT_QUESTION':
            {
                const showResults = state.currentQuestionIndex === state.questions.length - 1;
                const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1;
                const options = showResults ? [] : shuffleOptions(state.questions[currentQuestionIndex]);
                return {
                    ...state,
                    currentQuestionIndex,
                    showResults,
                    options,
                    currentAnswer: '',

                };
            }
        case 'RESTART':
            return initialState;
        case 'SELECT_ANSWER':
            {
                const quizScore = action.payload === state.questions[state
                    .currentQuestionIndex].correctAnswer
                    ? state.quizScore + 1
                    : state.quizScore;
                return {
                    ...state,
                    currentAnswer: action.payload,
                    quizScore,
                };
            }
        case 'LOADED_QUESTIONS':
            {
                const normalizedQuestions = normalizeQuestions(action.payload);
                return {
                    ...state,
                    questions: normalizedQuestions,
                    options: shuffleOptions(normalizedQuestions[0]),
                };
            }
        default: {
            return state;
        }
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

    const value = useReducer(reducer, initialState);
    return (
        <QuizContext.Provider value={value} >
            {children}
        </QuizContext.Provider>);

};
