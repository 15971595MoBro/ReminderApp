import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import './index.css';

import reminders from './reducers/index'

const store = createStore(reminders);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
