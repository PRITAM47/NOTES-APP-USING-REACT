import React, {Component} from 'react';

export class AddNewTask extends Component {
	constructor() {
		super();
		this.justSubmitted = this.justSubmitted.bind(this);
	}

	justSubmitted(event) {
		event.preventDefault(); 
		var input = event.target.querySelector('input');
		var value = input.value;
		input.value = '';
		this.props.updateList(value);
	}

	render() {
		return (
			<form onSubmit={this.justSubmitted} className="text-center">
				<input type="text" className="form-control-lg" placeholder="Add New Task"/>
				<input type="submit"  className="btn btn-outline-success ml-2" value="ADD" />
			</form>
		);
	}
}