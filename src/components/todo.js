import React, { useState } from 'react';
import './todo.scss';
import styled from 'styled-components';
import { EDIT_TODO, DELETE_TODO } from '../redux/reducer';
import { useDispatch } from 'react-redux';

const ButtonListStyled = styled.button`
    border: 1px black;
    outline: 0;
    padding: 2px 5px 2px 5px;
    margin-right: 5px;
    background: rgb(113, 240, 213);
    border-radius: 5px;
    cursor: pointer;
    width: 60px;
    text-transform: uppercase;
`;
// ---- random - color- task----
const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};
// console.log(generateColor());

const Todo = ({ text, todo, todos, setTodos, counters, setCounters }) => {
    // function --- Delete Task

    const [isEdit, setIsEdit] = useState(false);
    const [todoText, setTodoText] = useState(text);
    const dispatch = useDispatch();

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        // setCounters({ DELETE_TODO });
        dispatch(DELETE_TODO);
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

        // setCounters({ EDIT_TODO });
        dispatch(EDIT_TODO);
        setIsEdit(false);
        setTodos(
            todos.map((el) => {
                if (el.id === todo.id) {
                    return {
                        ...el,
                        edit: !el.edit,
                        text: value,
                        background: generateColor(),
                    };
                }
                return el;
            })
        );
    };

    return (
        <div className={'listTextString'} style={{ background: todo.background }}>
            <li>
                {isEdit ? (
                    <textarea
                        type="submit"
                        value={todoText}
                        onChange={changeHandler}
                        onBlur={saveHandler}
                        onKeyPress={(e) => (e.key === 'Enter' ? saveHandler() : null)}
                    />
                ) : (
                    <span className={`${todo.completed ? 'completed' : ''}`}>{todoText}</span>
                )}
            </li>
            <div className={'buttonBlock'}>
                <ButtonListStyled onClick={completeHandler}>Done!</ButtonListStyled>
                <ButtonListStyled onClick={editHandler}>Edit</ButtonListStyled>
                <ButtonListStyled onClick={deleteHandler}>Delete</ButtonListStyled>
            </div>
        </div>
    );
};
export default Todo;
