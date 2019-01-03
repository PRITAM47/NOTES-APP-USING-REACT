import React, {Component} from 'react';
import {AddNewTask} from './addTask';
import {NotesAppList} from './appList';


export class Notes extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<h1>Notes App</h1>
				<AddNewTask />
				<NotesAppList />
			</div>

		);
	}
}