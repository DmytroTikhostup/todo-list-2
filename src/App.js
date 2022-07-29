import React, { useEffect, useState } from 'react';
import './App.scss';
import Form from './components/form';
import List from './components/list';
import { useSelector } from 'react-redux';

function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);

    // create counters --------------------------------------------------------

    const counters = useSelector((state) => state);

    const Counter = ({ counters }) => {
        return (
            <div>
                <p>Statistic:</p>
                <p>Created Tasks: {counters.createdCounter}</p>
                <p>Edited Tasks: {counters.editedCounter}</p>
                <p>Deleted Tasks: {counters.deletedCounter}</p>
            </div>
        );
    };

    // ------- add generate color --------------------------------------------
    const generateColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    // ------- add Local Storage ---------------------------------------------

    const savelocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('counters', JSON.stringify(counters));
    };

    useEffect(() => {
        savelocalStorage();
    }, [todos, counters]);

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
            // setCounters(localCounter);
        }
    };

    useEffect(() => {
        getLocalStorage();
    }, []);

    // -------------- RENDER ------------------------------------------------------------
    return (
        <div className="App">
            <header>
                <h1 className="App-header">My first ToDo List on React </h1>
                <Counter className="Counter-section" counters={counters} />
            </header>
            <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} counters={counters} />

            <List setTodos={setTodos} todos={todos} counters={counters} color={generateColor()} />
        </div>
    );
}

export default App;
