import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './redux/reducers';
import App from './App';
import './index.css';

//to set redux we first have to create store so that's going to be cons store is equal to create store
//which is a function and then in there we put apply middleware and then in there
//we pass thunk as you can see and looks like i misspelled compose at the top great so the only thing we have
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);