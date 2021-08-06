import React, { Component } from "react";

/*This component consists of the input text box, the submit button, and the code that adds */

class InputUser extends Component {
	
	state = {
		name: ""
	};
	
	onChange = e => {
		this.setState({
				name: e.target.value
		});
	};
	
	handleSubmit = e => {
		e.preventDefault()
		if (this.state.name.trim()) {
			this.props.addUserProps(this.state.name)
			this.setState({
				name: "",
			})
		} else {
			alert("Please write item") /*handles blank submissions*/
		}
	}
	
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Add User..." value={this.state.name} onChange={this.onChange} />
				<button>Submit</button>
			</form>
		);
	};
}

export default InputUser;