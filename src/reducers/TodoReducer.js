import {
    GET_TODOS,
    ADD_TODO,
    REMOVE_TODO,
    SAVE_TODOS
} from './Action'

const TodoReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_TODOS:
            const data = localStorage.getItem('hooks-todos')
            if (data) state = JSON.parse(data)
            return state
        case SAVE_TODOS:
            localStorage.setItem('hooks-todos', JSON.stringify(state))
            return state
        case ADD_TODO:
            const newTodos = [...state, payload.todo]
            return newTodos
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== payload.id)
        default:
            return state
    }
}

export default TodoReducer
