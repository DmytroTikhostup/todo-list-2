import React from 'react';
import './todo.scss';
import styled from 'styled-components';

const InputStyled = styled.input`
    border: 3px green solid;
    width: 50%;
`;

const ButtonStyled = styled.button`
    border: 0;
    outline: 0;
    padding: 2px 5px 2px 5px;
    margin-right: 5px;
    background: rgb(113, 240, 213);
    border-radius: 5px;
    cursor: pointer;
    width: 60px;
    text-transform: uppercase;
`;

const ServerButton = styled.button`
    border: 0;
    outline: 0;
    padding: 2px 5px 2px 5px;
    margin-right: 5px;
    background: rgba(255, 170, 22, 0.674);
    border-radius: 5px;
    cursor: pointer;
    width: auto;
`;

const Form = ({ setInputText, todos, setTodos, inputText, counters, setCounters, inputURL }) => {
    const inputTextHandler = (e) => {
        // console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setInputText('');
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000 }]);
        setCounters({ createdCounter: counters.createdCounter + 1, editedCounter: counters.editedCounter, deletedCounter: counters.deletedCounter });
    };

    const FetchTodos = (e) => {
        e.preventDefault();
        fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
            // let fetchURL = inputURL;
            // console.log(fetchURL);
            // fetch(fetchURL)
            .then((response) => response.json())
            .then((getTodos) => {
                setTodos([
                    ...todos,
                    ...getTodos.map((el) => {
                        return {
                            ...el,
                            text: el.text,
                            id: Math.random() * 1000,
                            completed: el.isCompleted,
                            edit: false,
                            disableButtons: false,
                        };
                    }),
                ]);
            });
    };

    return (
        <form>
            <InputStyled value={inputText} onChange={inputTextHandler} type="text" placeholder="write your task here and do this)"></InputStyled>
            <ButtonStyled onClick={submitTodoHandler} type="submit">
                Add
            </ButtonStyled>
            {/* <input value={inputURL} type="text" /> */}
            <ServerButton className={'serverbutton'} onClick={FetchTodos}>
                Download on URL
            </ServerButton>
        </form>
    );
};
export default Form;
