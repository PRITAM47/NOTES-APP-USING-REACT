import React, {Component} from 'react';
import {AddNewTask} from './addTask';
import {NotesAppList} from './appList';


export class Notes extends Component {
	constructor(props) {
		super();
		this.state = {tasks: props.tasks};
		this.updateList = this.updateList.bind(this);
		this.removeTask = this.removeTask.bind(this);
	}

	updateList(text) {
		var updatedTasks = this.state.tasks;
		updatedTasks.push(text);
		this.setState({tasks: updatedTasks});
		this.updateLocalStorage(updatedTasks);
	}

	removeTask(text) {
		var updatedTasks = this.state.tasks;
		updatedTasks.splice(updatedTasks.indexOf(text), 1);
		this.setState({tasks: updatedTasks});
		this.updateLocalStorage(updatedTasks);
	}

	updateLocalStorage(updatedTasks) {
		localStorage.setItem('storedTasks', JSON.stringify(updatedTasks));
	}

	render() {
		return (
			<div>
				<h1 className="text-center text-primary bg-dark">Notes App</h1>
				<AddNewTask updateList={this.updateList} />
				<NotesAppList tasks={this.state.tasks} remove={this.removeTask}/>
			</div>

		);
	}
}