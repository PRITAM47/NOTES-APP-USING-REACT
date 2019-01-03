import React, {Component} from 'react';

export class NotesAppList extends Component {
	constructor() {
		super();
	}

	render() {
		// items = this.props.tasks.map(() => return <li> items)
		return (
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		);
	}
}