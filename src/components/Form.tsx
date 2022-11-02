import React from 'react'
import { useState } from 'react';

interface Props {
    createTodo: (text: string) => void
}

const Form = ({ createTodo }: Props) => {

    const [todoText, setTodoText] = useState<string>("");

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (todoText === "") return;
        createTodo(todoText);
        e.currentTarget.reset();
        setTodoText("");
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                name="newTodoText"
                onChange={(e) => setTodoText(e.target.value)}
            />
            <button type="submit" disabled={!todoText}>Create Todo</button>
        </form>
    )
}

export default Form