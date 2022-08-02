import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.scss';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import CounterReducer from './redux/reducer';
import FormReducer from './redux/reducerForm';

const store = legacy_createStore(FormReducer);

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

reportWebVitals();
