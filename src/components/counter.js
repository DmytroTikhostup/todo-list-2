import React from 'react';

// create counters --------
const Counter = ({ counters }) => {
    return (
        <div>
            <p>Statistic my ToDo List</p>
            <p>Created Tasks: {counters.createdCounter}</p>
            <p>Edited Tasks: {counters.editedCounter}</p>
            <p>Deleted Tasks: {counters.deletedCounter}</p>
        </div>
    );
};
export default Counter;
