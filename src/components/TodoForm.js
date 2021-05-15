import React, { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { ADD_TODO } from '../reducers/Action'

const TodoForm = () => {
    const [title, setTitle] = useState('')
    const { dispatch } = useContext(TodoContext)

    const handleSubmit = e => {
        e.preventDefault()
        if (title && title.trim()) {
            dispatch({
                type: ADD_TODO,
                payload: {
                    todo: {
                        id: Math.random() * 999 + 1,
                        title
                    }
                }
            })
        }
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new todo ..."
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input type="submit" value="Add" />
        </form>
    )
}

export default TodoForm
