// ---- action for Form -------------------------------------------------------

export const CREATE_FORM = (value) => ({
    type: 'CREATE_FORM',
    payload: value,
});

// ---- Reducer for Form -------------------------------------------------------

export const defaultState = {
    list: [],
};
//     create: false,
//     text: '',
//     completed: false,
//     id: Math.random() * 1000,
//     background: '#' + Math.floor(Math.random() * 16777215).toString(16),
// };

const FormReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'CREATE_FORM':
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        create: false,
                        text: action.payload,
                        completed: false,
                        id: Math.random() * 1000,
                        background: '#' + Math.floor(Math.random() * 16777215).toString(16),
                    },
                ],
            };
        default:
            return state;
    }
};
export default FormReducer;
