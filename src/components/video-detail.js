import React, { Component } from 'react'

class VideoDetail extends Component{
	render(){
		const title = this.props.title;
		const description = this.props.description;
		return(
			<div>
				<h5 className="block_titre">{ title } </h5>
				<p>{ description } </p>
			</div>
		)
	}
}

export default VideoDetail;