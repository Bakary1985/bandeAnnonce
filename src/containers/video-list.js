import React, { Component } from 'react';
import VideoListItem from '../components/video-list-item';

class VideoList extends Component {
  	render() {
  		const movieList = this.props.movieList;
  		console.log(movieList)
	    return (
		    <div className="videoList">
		      	<ul>
		      	{
		      		movieList.map(movie =>{
		      			return <VideoListItem key={movie.id} movie={ movie } />
		      		})
		      	}
		      	</ul>
		    </div>
	    );
  	}
}

export default VideoList;
