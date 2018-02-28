import React, { Component } from 'react';

const BASE_IMAGE_URL ="https://image.tmdb.org/t/p/w500/"

class VideoListItem extends Component {
  	render() {
  		const movie = this.props.movie ;
  		console.log(movie)
	    return (
		    <div className="videoList">
		    	<img height="100px" width="100px" src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} />
		      	<h3>{ movie.title }</h3>
		    </div>
	    );
  	}
}

export default VideoListItem;
