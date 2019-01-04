import React, {Component} from 'react';


export class NotesAppList extends Component {
	constructor() {
		super();
		this.remove = this.remove.bind(this);
	}

	remove(element){
		var value = element.target.parentNode.querySelector('span').innerText;
		this.props.remove(value);
	}

	render() {
		var items = this.props.tasks.map((element, index) => {
				return <li className="list-group-item" key={index}><span className="badge badge-warning">{element}</span><button type="button" className="btn btn-danger ml-2" onClick={this.remove}>DELETE</button></li>
		});
		return (
			<ul>
				{items}
			</ul>
		);
	}
}