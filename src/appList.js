import React, {Component} from 'react';

export class NotesAppList extends Component {
	constructor() {
		super();
	}

	render() {
		var items = this.props.tasks.map((element, index) => {
				return <li key={index}>{element}</li>
		});
		return (
			<ul>
				{items}
			</ul>
		);
	}
}