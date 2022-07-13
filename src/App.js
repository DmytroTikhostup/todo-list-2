import React, { useEffect, useState } from 'react';
import './App.css';

import Form from './components/form';
import List from './components/list';
import Counter from './components/counter';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [counters, setCounters] = useState({
        createdCounter: 0,
        editedCounter: 0,
        deletedCounter: 0,
    });

    const savelocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('counters', JSON.stringify(counters));
    };

    useEffect(() => {
        savelocalStorage();
    }, [todos, counters]);

    useEffect(() => {
        getLocalStorage();
    }, []);

    const getLocalStorage = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            let localTodo = JSON.parse(localStorage.getItem('todos'));
            setTodos(localTodo);
        }
        if (localStorage.getItem('counters') === null) {
            localStorage.setItem('counters', JSON.stringify([]));
        } else {
            let localCounter = JSON.parse(localStorage.getItem('counters'));
            setCounters(localCounter);
        }
    };

    return (
        <div className="App">
            <header>
                <h1 className="App-header">My first ToDo List on React </h1>
                <Counter className="Counter-section" counters={counters} setCounters={setCounters} />
            </header>
            <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} counters={counters} setCounters={setCounters} />
            <List setTodos={setTodos} todos={todos} counters={counters} setCounters={setCounters} />
        </div>
    );
}

export default App;
