import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore, combineReducers } from 'redux';

const usersState = [
    {
        id: 'jhhjj-9292-djdj',
        name: "Danny Pule",
        age: "32"
    }
];

///////////////////////////////
/// users: reducer function ///
///////////////////////////////
const users = (state = usersState, action) => {
  return state;
};

///////////////////////////////
/// metaInfo: reducer function ///
///////////////////////////////
const metaInfo = (state = {title: 'Users CMS'}, action) => {
  return state;
};

const appState = combineReducers({
    users,
    metaInfo
});
const store = createStore(appState); // create the store

const render = ()=>{
    ReactDOM.render(<App {...store.getState()} />, document.getElementById('app'));
}

render(); // initial render
store.subscribe(()=>{
    render();
});
