import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props){
		super(props)

		this.state ={ placeHolder:"Veuillez taper votre film s'ilcvous plait", searchText:"" }
	}

	handleChange =(e)=>{
		this.setState({ searchText: e.target.value});
	}
	render() {
		return (
			<div className="SearchBar">
				<input onChange={this.handleChange} placeholder={this.state.placeHolder} />
			</div>
		);
	}
}

export default SearchBar;
