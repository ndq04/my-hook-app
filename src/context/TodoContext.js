import React, { useReducer, createContext, useEffect } from 'react'
import { GET_TODOS, SAVE_TODOS } from '../reducers/Action'
import TodoReducer from '../reducers/TodoReducer'

export const TodoContext = createContext()

const TodoContextProvider = ({ children }) => {
    const [todos, dispatch] = useReducer(TodoReducer, [])

    //Getting data from locals torage
    useEffect(() => {
        dispatch({
            type: GET_TODOS,
            payload: null
        })
    }, [])

    // //Setting local storage
    useEffect(() => {
        dispatch({
            type: SAVE_TODOS,
            payload: null
        })
    }, [todos])

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
