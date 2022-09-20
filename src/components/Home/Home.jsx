import React, {useState} from 'react';
import TodoItem from './Item/TodoItem';
import CreateTodoField from './CreateTodoField/CreateTodoField';

const data = [
    {
        _id: '1',
        title: 'Finish the essay',
        isComplited: false
    },
    {
        _id: '2',
        title: 'Read next book',
        isComplited: false
    },
    {
        _id: '3',
        title: 'Cook',
        isComplited: false
    }
]

const Home = () => {

    const [todos, setTodos] = useState(data)

    const changeTodo = (id) => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isComplited = !current.isComplited
        setTodos(copy)
    }

    const removeTodo = (id) => {
        setTodos([...todos.filter(t => t._id != id)])
    }

    return (
        <>
        <div className= 'text-white w-4/5 mx-auto'>
            <h1 className='text-2xl font-bold text-center mb-10'>TODO for junior</h1>

            {todos.map(todo => (<TodoItem 
            key={todo._id} 
            todo={todo} 
            changeTodo={changeTodo}
            removeTodo={removeTodo} 
            ></TodoItem>))}
            <CreateTodoField setTodos={setTodos} />
        </div>
        </>
    );
}

export default Home;