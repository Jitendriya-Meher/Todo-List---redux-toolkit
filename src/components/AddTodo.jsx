import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';
import toast from 'react-hot-toast';

const AddTodo = () => {

    const [todo,setTodo] = useState("");
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        if( todo.length === 0 ) {
            toast.error("please enter a valid todo");
            return;
        }

        dispatch(addTodo(todo));
        toast.success("Todo added successfully");

        setTodo("");
    }

  return (
    
    <form className=' space-x-3 mt-12 mx-20 flex justify-between gap-10' 
    onSubmit={addTodoHandler}>

        <input type="text"
        className=' bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out w-full'
        placeholder='Enter a Todo...'
        value={todo}
        onChange={(e)=> {
            setTodo(e.target.value);
        }} />

        <button type='submit'
        className=' text-white bg-indigo-500 border-0 py-2 w-[20%] rounded-md hover:bg-indigo-600 active:bg-indigo-700 active:scale-95'>
            Add Todo
        </button>

    </form>
  )
}

export default AddTodo
