import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'

const API_KEY = 'AIzaSyBJyFaIceiJhMowbRSwIFlE0gFInDEI-qw'

//YTSearch({key: API_KEY, term: 'pingy'}, data => console.log(data))

//app component
class App extends React.Component {
	constructor (props) {
		super(props)
		this.state = { videos: []}
		YTSearch({key: API_KEY, term: 'pingy'}, data => this.setState({videos: data}))
	}

	render() {
		return(
			<div>
				<SearchBar />
				<VideoList videos = {this.state.videos} />
			</div>
		)
	}
}


ReactDOM.render(
	<App />,
	document.getElementById("container")
)
