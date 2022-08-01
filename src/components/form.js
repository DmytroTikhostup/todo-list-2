import React from 'react';
import './todo.scss';
import styled from 'styled-components';
import { ADD_TODO } from '../redux/reducer';
import { CREATE_FORM } from '../redux/reducerForm';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

// ----- styled elements -----------------------------------------------------------------

const InputStyled = styled.input`
    :hover {
        border: 3px green solid;
        box-shadow: 0px 0px 5px 3px rgb(255, 255, 255);
    }
    width: 50%;
    height: 40px;
    border-radius: 7px;
    padding-left: 10px;
`;

const ButtonStyled = styled.button`
    color: white;
    outline: 0;
    padding: 2px 5px 2px 5px;
    margin: 10px;
    background: #8f54fc;
    border-radius: 5px;
    cursor: pointer;
    width: 60px;
    height: 40px;
    text-transform: uppercase;
    :hover {
        box-shadow: 0px 0px 5px 3px #8f54fc;
        border: 1px black solid;
    }
`;

const ServerButton = styled.button`
    border: 0;
    outline: 0;
    padding: 2px 5px 2px 5px;
    margin-right: 5px;
    background-color: #ff33e0;
    border-radius: 5px;
    height: 36px;
    cursor: pointer;
    width: auto;
    :hover {
        box-shadow: 0px 0px 5px 3px #ff33e0;
        border: 1px black solid;
    }
`;

// ---- random - color- task--------------------------------------------------------------
const generateColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

// ---- create form -----------------------------------------------------------------

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const dispatch = useDispatch();
    const createForm = useSelector((state) => state);

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setInputText('');
        // setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 1000, background: generateColor() }]);
        dispatch(ADD_TODO);
        dispatch(CREATE_FORM(e.target.value));
    };

    const FetchTodos = (e) => {
        e.preventDefault();
        fetch('https://gist.githubusercontent.com/alexandrtovmach/0c8a29b734075864727228c559fe9f96/raw/c4e4133c9658af4c4b3474475273b23b4a70b4af/todo-task.json')
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
                            background: generateColor(),
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
            <ServerButton className={'serverbutton'} onClick={FetchTodos}>
                ➥
            </ServerButton>
        </form>
    );
};
export default Form;
