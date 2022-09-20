import React from 'react';
import Checkbox from './Checkbox';
import cn from 'classnames'
import {FiTrash} from 'react-icons/fi'

function TodoItem({todo, changeTodo, removeTodo}) {
    return (
        <div
        className='flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full'
        >
            <button className='flex items-center' onClick={() => changeTodo(todo._id)}>
                <Checkbox isComplited={todo.isComplited}/>
                <span className={cn({'line-through': todo.isComplited,})}>{todo.title}</span>
                
            </button>
            <button onClick={() => removeTodo(todo._id)}>
                <FiTrash size={22} className='text-gray-600 hover:text-pink-400 transition-colors ease-in-out duration-300'/>
            </button>
        </div>
    );
}

export default TodoItem;