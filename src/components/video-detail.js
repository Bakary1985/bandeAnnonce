import React, { Component } from 'react'

class VideoDetail extends Component{
	render(){
		const title = this.props.title;
		const description = this.props.description;
		return(
			<div>
				<h1>{ title } </h1>
				<p>{ description } </p>
			</div>
		)
	}
}

export default VideoDetail;