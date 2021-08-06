import React from "react";
import Item from "./Item";

class UserList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.users.map(user => (
				<Item
					key={user.id}
					user={user}
					handleChangeProps={this.props.handleChangeProps}
					deleteUserProps={this.props.deleteUserProps}
				/>
				))}
			</ul>
		);
	}
}
export default UserList;