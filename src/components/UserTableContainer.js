import React from "react";
import UserList from "./UserList";
import Header from "./Header";
import InputUser from "./InputUser";
/*Importing uuid for the purpose of making a randomly generated id for each new entry.*/
import { v4 as uuidv4 } from "uuid";

/*This component contains most of the other components. As their parent, it also has the state object and the code for updating the state object.*/

/*The "completed" key-value pair in the objects below is a vestige of the original program, which was a to do list. It seemed worthwhile to leave it in for now as another code example.*/
class UserTableContainer extends React.Component {
	state = {
		users: [
			{
				id: uuidv4(),
				name: "Robert Smith",
				completed: true
			},	
			{
				id: uuidv4(),
				name: "Steven Morrissey",
				completed: false
			},
			{
				id: uuidv4(),
				name: "John Doe",
				completed: false
			}
		]
	};
	
	
	/*handleChange updates state when a checkbox is clicked. It is passed down as a prop and called in the Item component.*/
	handleChange = id => {
		this.setState(prevState => ({
			users: prevState.users.map(user => {
				if (user.id === id) {
					return {
						...user,
						completed: !user.completed,
					}
				}
				return user
			}),
		}));
	};
	
	/*This deletes a user.*/
	delUser = id => {
		this.setState({
			/*This updates the users array in state by replacing it with an identical array, minus the deleted one. The spread operator, prevents the update from creating unwanted nested arrays.*/
			users: [
				...this.state.users.filter(user => {
					return user.id !== id;
					/*Return only the IDs NOT equal to the one passed to delUser*/
				})
			]
		});
	};
	
	addUserItem = name => {
		const newUser = {
			id: uuidv4(),
			name: name,
			completed: false
		};
		/*setState replaces users with its current value PLUS the new object. The spread operator prevents the original list from becoming a nested array inside users.*/
		this.setState({
			users: [...this.state.users, newUser]
		});
	};
	
	render() {
		return (
			<div>
				<Header />
				<InputUser addUserProps={this.addUserItem} />
				<UserList 
					users={this.state.users} 
					handleChangeProps={this.handleChange} 
					deleteUserProps={this.delUser}
				/>
			</div>
		);
	};
}
export default UserTableContainer;