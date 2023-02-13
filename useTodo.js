import {useEffect, useReducer} from 'react';
import { todoReducer } from './todoReducer';

const initialState = [];

export const useTodo = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(()=>{
        localStorage.setItem('todos',[JSON.stringify(todos)]);
    },[todos]);

    const handleNewTodo = (newTodo) => {
        const action = {
            type: '[TODO] addTodo',
            payload: newTodo
        }

        dispatch(action);
   }

   const handleDeleteTodo = (id) => {
    // console.log(id);
    dispatch({
        type:'[TODO] deleteTodo',
        payload: id
    })
   }

   const handleToggleTodo = (id) =>{
        dispatch({
            type: '[TODO] toggleTodo',
            payload: id
        })
   }
    return{
        todos, 
        allTodosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleToggleTodo,
        handleDeleteTodo
    }
}