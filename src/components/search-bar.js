import React, { Component } from 'react';
import  '../style/style.css';

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
			<div className="row">
				<div className="col-md-8">
					<input type="text" className="form-control input-lg" onChange={this.handleChange} placeholder={this.state.placeHolder} />
				</div>
			</div>
		);
	}
}

export default SearchBar;
