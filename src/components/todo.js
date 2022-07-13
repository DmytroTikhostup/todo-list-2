import React, { useState } from 'react';
import './todo.css';
import styled from 'styled-components';

const ButtonListStyled = styled.button`
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

const Todo = ({ text, todo, todos, setTodos, counters, setCounters }) => {
    // function --- Delete Task

    const [isEdit, setIsEdit] = useState(false);
    const [todoText, setTodoText] = useState(text);

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        setCounters({ createdCounter: counters.createdCounter, editedCounter: counters.editedCounter, deletedCounter: counters.deletedCounter + 1 });
    };

    // function --- Done Task

    const completeHandler = () => {
        setTodos(
            todos.map((el) => {
                if (el.id === todo.id) {
                    return { ...el, completed: !el.completed };
                }
                return el;
            })
        );
    };

    // function --- Edit Task

    const changeHandler = (event) => {
        const value = event.currentTarget.value;
        setTodoText(value);
    };

    const editHandler = () => {
        setIsEdit(true);
    };

    const saveHandler = (event) => {
        const value = event.currentTarget.value;

        setCounters({ createdCounter: counters.createdCounter, editedCounter: counters.editedCounter + 1, deletedCounter: counters.deletedCounter });
        setIsEdit(false);
        setTodos(
            todos.map((el) => {
                if (el.id === todo.id) {
                    return {
                        ...el,
                        edit: !el.edit,
                        text: value,
                    };
                }
                return el;
            })
        );
    };

    return (
        <div>
            <li className={'listTextString'}>
                {isEdit ? (
                    <input type="text" value={todoText} onChange={changeHandler} onBlur={saveHandler} />
                ) : (
                    <span className={`${todo.completed ? 'completed' : ''}`}>{todoText}</span>
                )}
            </li>
            <ButtonListStyled onClick={completeHandler}>Done!</ButtonListStyled>
            <ButtonListStyled onClick={editHandler}>Edit</ButtonListStyled>
            <ButtonListStyled onClick={deleteHandler}>Delete</ButtonListStyled>
        </div>
    );
};
export default Todo;
