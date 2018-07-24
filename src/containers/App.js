import React, { Component } from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import axios from 'axios';
import VideoDetail from '../components/video-detail';
import Video from '../components/video';
import  '../style/style.css';

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=true&append_to_response=images"
const API_KEY = "api_key=756d58e436956983626c7160fc931e60"
const SEARCH_URL = "search/movie?language=fr&include_adulte=false"

class App extends Component {
	constructor(props){
		super(props)
		this.state={movieList:{},currentMovie:{}}

	}

	componentWillMount(){
		// on initialise la requete
		this.iniMovis();
	}

	//une fonction pour les requetes ajax
	iniMovis(){
		axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(function(response){
			this.setState({ currentMovie:response.data.results[0], movieList:response.data.results.slice(1,6) }, function(){
				this.applyVideoToCurrentMovie();
			});
		}.bind(this));
	}

	applyVideoToCurrentMovie(){
		//https://api.themoviedb.org/3/movie/[id]?api_key=votreClé&append_to_response=videos&include_adult=false
    	axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=true`).then(function(response){	
			const youtubekey = response.data.videos.results[0].key;	
			let newcurrentMovieState = this.state.currentMovie;
			newcurrentMovieState.videoId = youtubekey;
			this.setState({currentMovie : newcurrentMovieState});
		}.bind(this)); 
    }

    onClickSearch(searchText){
    	if (searchText) {

	    	axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(function(response){
	    		if (response.data && response.data.results[0]) {
    				if (response.data.results.id != this.state.currentMovie.id ) {
    					this.setState({ currentMovie:response.data.results[0]}, () =>{
							this.applyVideoToCurrentMovie();
						});
    				}
    			}
				
			}.bind(this));
		}

    }

    receiveCallBack(movie){
    	this.setState({currentMovie:movie}, function(){
    		this.applyVideoToCurrentMovie();
    	});
    }

	render() {
		const renderVideoList = () =>{
			if (this.state.movieList.length >= 5) {
				return <VideoList 	movieList={this.state.movieList} callback={this.receiveCallBack.bind(this)}/>
			}
		}
	    return (
	      	<div >
	      	<div className="Search_bar">
	      		<SearchBar  callback={this.onClickSearch.bind(this)}/>
	      	</div>
	      	<div className="row">
	      		<div className="col-md-8">
	      			<Video videoId={this.state.currentMovie.videoId} />
	      			<VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} />
	      		</div> 
	      		<div className="col-md-4">   	
	        		{renderVideoList()}
	        	</div>
	        </div>
	        	
	      	</div>
	    );
	}
}

export default App;
