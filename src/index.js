import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyBJyFaIceiJhMowbRSwIFlE0gFInDEI-qw'

//app component
const App = () => {
	return(
		<div> 
			<SearchBar />
		</div>
	) 
}

//greeting component
class Greeting extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>
				<p> I am alexis {this.props.lastName} </p>
				<App />
			</div>
		)
	}
}

ReactDOM.render(
	<Greeting lastName = "Herrera" />,
	document.getElementById("container")
)
