import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { createStore, combineReducers } from 'redux';
import users from './components/users/users.reducer.js';
import metaInfo from './components/metaInfo/metaInfo.reducer.js';

const appState = combineReducers({
    users,
    metaInfo
});
const store = createStore(appState); // create the store

const render = ()=>{
    ReactDOM.render(<App {...store.getState()} />, document.getElementById('app'));
}

render(); // initial render

store.subscribe(()=>{ // subscribe to changes in state
    render(); // re-render whenever state is changed
});
