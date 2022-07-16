import React from 'react';
import Todo from './todo';
import './todo.scss';
import styled from 'styled-components';

const WrapperStyledOl = styled.ol`
    width: auto;
    font-size: 20px;
    margin: 0 20% 0 20%;
    text-align: left;
    background: ${(props) => props.generateColor};
`;

const List = ({ todos, setTodos, setEditText, counters, setCounters }) => {
    return (
        <div>
            <WrapperStyledOl>
                {todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        text={todo.text}
                        setTodos={setTodos}
                        todos={todos}
                        setEditText={setEditText}
                        counters={counters}
                        setCounters={setCounters}
                    />
                ))}
            </WrapperStyledOl>
        </div>
    );
};
export default List;
