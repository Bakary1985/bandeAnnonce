import React, { Component } from 'react';
import  '../style/style.css';

class SearchBar extends Component {
	constructor(props){
		super(props)

		this.state ={ placeHolder:"Veuillez taper votre film s'il vous plait", searchText:"" }
	}

	handleChange =(e)=>{
		this.setState({ searchText: e.target.value});
	}
	handlClick(event){
		this.props.callback(this.state.searchText)
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-8">
					<input type="text" className="block_input_search" onChange={this.handleChange} placeholder={this.state.placeHolder} />
					<span className="">
						<button className="" onClick={this.handlClick.bind(this)}>Go</button>
					</span>
				</div>
			</div>
		);
	}
}

export default SearchBar;
