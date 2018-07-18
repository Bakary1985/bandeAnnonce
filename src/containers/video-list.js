import React, { Component } from 'react';
import VideoListItem from '../components/video-list-item';

const VideoList =(props)=> {
  		const {movieList} = props;
  		console.log(movieList)
	    return (
		      	<ul>
			      	{
			      		movieList.map(movie =>{
			      			return <VideoListItem key={movie.id} movie={ movie } callback={receiveCallBack} />
			      		})
			      	}
		      	</ul>
	    );
	    function receiveCallBack(movie){
	    	props.callback(movie);
	    }
}

export default VideoList;
