import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: JSON.parse(localStorage.getItem("Todos")) || []
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers:{
        addTodo : (state, action) => {

            const todo = {
                id:nanoid(),
                text: action.payload,
                completed:false
            };

            state.todos.push(todo);

            localStorage.setItem("Todos", JSON.stringify(state.todos));
        },
        removeTodo : (state, action) => {

            state.todos = state.todos.filter( (todo) => {
                return todo.id !== action.payload
            });

            localStorage.setItem("Todos", JSON.stringify(state.todos));
        },
        toggleComplete: (state, action) => {

            state.todos = state.todos.map( (todo) => {
                if( todo.id === action.payload){
                    return {
                        ...todo, completed: !todo.completed
                    }
                }
                else{
                    return{
                        ...todo
                    }
                }
            });
            localStorage.setItem("Todos", JSON.stringify(state.todos));
        },
        handleEdit:(state,action) =>{

            console.log(action);

            state.todos = state.todos.map( (todo) => {
                if( todo.id === action.payload.id){
                    return {
                        ...todo, text: action.payload.newTitle
                    }
                }
                else{
                    return{
                        ...todo
                    }
                }
            });
            localStorage.setItem("Todos", JSON.stringify(state.todos));
        }
    }
});

export const { addTodo , removeTodo, toggleComplete, handleEdit} = todoSlice.actions;

export default todoSlice.reducer;
