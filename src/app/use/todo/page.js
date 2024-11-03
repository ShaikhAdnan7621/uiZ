'use client';

import { useState, useEffect } from 'react';
import Input from '@/Component/Input';
import Button from '@/Component/Button';
import Checkbox from '@/Component/Checkbox';
import { nanoid } from 'nanoid';

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [isBrowser, setIsBrowser] = useState(false); // Add this state

    // Ensure that localStorage only runs in the browser
    useEffect(() => {
        setIsBrowser(true); // Set to true when in browser
    }, []);

    useEffect(() => {
        if (isBrowser) {
            const storedTodos = localStorage.getItem('todos');
            setTodos(storedTodos ? JSON.parse(storedTodos) : []);
        }
    }, [isBrowser]); // Run only when we are sure we are in the browser

    useEffect(() => {
        if (isBrowser) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos, isBrowser]);

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { id: nanoid(), text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="p-4 border border-gray-500 rounded-md m-20">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="flex mb-4">
                <Input
                    type="text"
                    placeholder="Add a todo"
                    value={newTodo}
                    onChange={(value) => setNewTodo(value.target.value)}
                    className="mr-2 flex-grow"
                />
                <Button onClick={addTodo}>Add</Button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id} className="flex items-center mb-2">
                        <Checkbox
                            checked={todo.completed}
                            onChange={() => toggleComplete(todo.id)}
                            className="mr-2"
                        />
                        <span className={todo.completed ? "line-through" : ""}>{todo.text}</span>
                        <Button onClick={() => deleteTodo(todo.id)} className="ml-auto text-red-500">
                            Delete
                        </Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoPage;
