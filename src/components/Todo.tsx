import React from 'react'
import { TodoType } from '../types/types';


interface Props {
    todoList: TodoType[];
    deleteTodo: (id: string) => void
}

const Todo = ({ todoList, deleteTodo }: Props) => {
    return (
        <ul>
            {
                todoList.map(oneTodo => {
                    return (
                        <li key={oneTodo.id}>
                            <h4>{oneTodo.text}</h4>
                            <p>{oneTodo.date}</p>
                            <button onClick={() => deleteTodo(oneTodo.id)}>Delete</button>
                        </li>
                    )

                })
            }
        </ul>
    )
}

export default Todo