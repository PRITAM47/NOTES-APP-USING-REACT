import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Notes} from './main';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

var tasksList = [];

//Creating a local storage so that data will not lost after refreshing the page
var tasks = localStorage.getItem('storedTasks'); 

if(tasks) {
	tasksList = JSON.parse(tasks);
}

ReactDOM.render(<Notes tasks={tasksList} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
