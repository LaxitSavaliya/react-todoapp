import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [
        { id: '1', task: 'Demo Task', complete: false, edit: false }
    ],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addNewTask: (state, action) => {
            const taskText = action.payload.trim().replace(/\s+/g, ' ');
            if (taskText !== '') {
                state.todos.push({
                    id: nanoid(),
                    task: taskText,
                    complete: false,
                    edit: false
                });
            }
        },

        deleteTask: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        toggleComplete: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.complete = !todo.complete;
            }
        },
        startEditTask: (state, action) => {
            state.todos.forEach((todo) => {
                todo.edit = (todo.id === action.payload);
            });
        },
        updateTask: (state, action) => {
            const { id, newEditTask } = action.payload;
            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.task = newEditTask.trim().replace(/\s+/g, ' ');
                todo.edit = false;
                todo.complete = false;
            }
        },
        exitEditMode: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.edit = false;
            }
        },
        toggleAllComplete: (state, action) => {
            const allDone = state.todos.every((todo) => todo.complete === true);
            state.todos = state.todos.map((todo) => ({
                ...todo,
                complete: !allDone
            }));
        }
    }
})

export const { addNewTask, deleteTask, toggleComplete, startEditTask, updateTask, exitEditMode, toggleAllComplete } = todoSlice.actions;
export default todoSlice.reducer;