import React from "react";


/*This component handles individual <li> items in the user list. This component is replicated as many times as necessary when the UserList component uses map() to cycle through each item in users.*/
class Item extends React.Component {
	
	render() {
		return (
			<li>
				<input 
					type="checkbox" 
					checked={this.props.user.completed}
					onChange={() => this.props.handleChangeProps(this.props.user.id)}
				/>
				<button onClick={() => this.props.deleteUserProps(this.props.user.id)}>
					Delete
				</button>
				
				{this.props.user.name}
			</li>
		);
	};
}

export default Item;