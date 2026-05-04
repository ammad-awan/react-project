import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: []
}

const todoSlice = {
    name: 'todo',
    initialState,
    reducer: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },

        updateTodo: (state, action) => {
            state.todos.map(todo => todo.id === action.payload.id)
        },

        deleteTodo: (state, action) => {
            state.todos.filter(todo => todo.id !== action.payload.id)
        }
    }
}