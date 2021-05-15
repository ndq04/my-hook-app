import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { TodoContext } from '../context/TodoContext'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'
import { AuthContext } from './../context/AuthContext'

const TodoList = () => {
    const { todos } = useContext(TodoContext)
    const { isAuthenticated } = useContext(AuthContext)

    const { theme } = useContext(ThemeContext)
    const { isLightTheme, light, dark } = theme
    const Theme = isLightTheme ? light : dark
    const style = {
        background: Theme.ui
    }
    return (
        isAuthenticated && (
            <div className='todo-list' style={style}>
                <TodoForm />
                <ul>
                    {todos.map((todo, i) => (
                        <TodoItem key={i} todo={todo} />
                    ))}
                </ul>
            </div>
        )
    )
}

export default TodoList