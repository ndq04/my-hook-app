import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { REMOVE_TODO } from '../reducers/Action'

const TodoItem = ({ todo }) => {
    const { dispatch } = useContext(TodoContext)
    const handleDelete = () => {
        if (window.confirm('Are your sure you want to delete ?')) {
            dispatch({
                type: REMOVE_TODO,
                payload: { id: todo.id }
            })
        }
    }
    return (
        <li onClick={handleDelete}>
            <p>{todo.title}</p>
        </li>
    )
}

export default TodoItem
