import React, { Component } from 'react';
import  '../style/style.css';

const BASE_IMAGE_URL ="https://image.tmdb.org/t/p/w500/"

const VideoListItem = (props)=>{
	const {movie} = props ;
    return <li className="group-list-item" onClick={handleOnClick}>
			    <div className="media" id="block_left">
			    	<div className="media-left">
			    		<img className="media-object img-rounded" height="100px" width="100px" src={`${BASE_IMAGE_URL}${movie.backdrop_path}`} alt="test"/>
			    	</div>
			    	<div className="media-body">
		      			<p className="title_list_item">{ movie.title }</p>
		      		</div>
			    </div>    
	    	</li>
		    function handleOnClick(){
				props.callback(movie);
			}
}

export default VideoListItem;
