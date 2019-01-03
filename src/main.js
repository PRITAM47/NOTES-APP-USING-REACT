import React, {Component} from 'react';
import {AddNewTask} from './addTask';
import {NotesAppList} from './appList';


export class Notes extends Component {
	constructor(props) {
		super();
		this.state = {tasks: props.tasks};
		this.updateList = this.updateList.bind(this);
	}

	updateList(text) {
		var updatedTasks = this.state.tasks;
		updatedTasks.push(text);
		this.setState({tasks: updatedTasks});
	}

	render() {
		return (
			<div>
				<h1>Notes App</h1>
				<AddNewTask updateList={this.updateList} />
				<NotesAppList tasks={this.state.tasks} />
			</div>

		);
	}
}