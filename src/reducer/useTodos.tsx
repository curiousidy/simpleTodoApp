import { TodoAction, TodoType } from "../types/types";
import { v4 as uuidv4 } from 'uuid';
import { useReducer } from 'react';

const todoReducer = (state: TodoType[], action: TodoAction): TodoType[] => {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {
                    id: uuidv4(),
                    text: action.payload.text,
                    date: new Date().toDateString(),
                    isDone: true
                }
            ];
        case "delete":
            return state.filter((oneTodo) => oneTodo.id !== action.payload.id);

        case "update":
            return state.map((oneTodo) => {
                if (oneTodo.id === action.payload.id) {
                    return oneTodo.isDone ? { ...oneTodo, isDone: false } :
                        { ...oneTodo, isDone: true };
                }

                return oneTodo
            })

        default:
            return state;
    }
};

const INITIAL_STATE: TodoType[] = [
    {
        id: uuidv4(),
        text: "Learn more JS",
        date: new Date().toLocaleDateString(),
        isDone: false
    },
    {
        id: uuidv4(),
        text: "Practice and thinking  ",
        date: new Date().toLocaleDateString(),
        isDone: false
    },
]

export const useTodoReducer = () => useReducer(todoReducer, INITIAL_STATE);