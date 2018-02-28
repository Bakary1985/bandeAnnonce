import React, { Component } from 'react';
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import axios from 'axios';
import VideoDetail from '../components/video-detail';

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY = "api_key=756d58e436956983626c7160fc931e60"

//import _ from 'lodash'
//import SearchBar from '../components/search-bar'
//import MovieVideo from '../components/movie-video'
//import MovieList from './movie-list'

//const API_END_POINT = "https://api.themoviedb.org/3/";
//const API_KEY = "756d58e436956983626c7160fc931e60";
//const DEFAULT_TYPE_SEARCH ="discover";
//const DEFAULT_PARAM = "language=fr&include_adult=false";

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
    	axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(function(response){	
			console.log("/////////////")
			console.log(response)
			console.log("///////////")
		}.bind(this)); 
    }



	render() {
		const renderVideoList = () =>{
			if (this.state.movieList.length >= 5) {
				return <VideoList 	movieList={this.state.movieList}/>
			}
		}
	    return (
	      	<div className="App">
	        	<SearchBar />
	        	{renderVideoList()}
	        	<VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview} />
	      	</div>
	    );
	}
}

export default App;
