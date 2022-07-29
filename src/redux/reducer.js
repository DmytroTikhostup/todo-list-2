// ---- actions for Counters -------------------------------------------------------

export const ADD_TODO = { type: 'ADD_TODO', payload: 1 };
export const EDIT_TODO = { type: 'EDIT_TODO', payload: 1 };
export const DELETE_TODO = { type: 'DELETE_TODO', payload: 1 };

// ---- Reducer for Counters -------------------------------------------------------

const defaultState = {
    createdCounter: 0,
    editedCounter: 0,
    deletedCounter: 0,
};

const CounterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return { ...state, createdCounter: state.createdCounter + action.payload };
        }
        case 'EDIT_TODO': {
            return { ...state, editedCounter: state.editedCounter + action.payload };
        }
        case 'DELETE_TODO': {
            return { ...state, deletedCounter: state.deletedCounter + action.payload };
        }
        default:
            return state;
    }
};

export default CounterReducer;
