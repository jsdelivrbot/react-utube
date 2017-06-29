import React from 'react'

class SearchBar extends React.Component {

	constructor(props) {
		super(props)

		this.state = { term: 'ooook ok ok'}
		this.onInputChange = this.onInputChange.bind(this)

	}

	onInputChange(e) {
		this.setState({term: e.target.value})
	}

	render() {
		return (
			<div>
			<input onChange= {this.onInputChange} value = {this.state.term}  />
			<p> {this.state.term} </p>
			</div>
		)
	}
}

export default SearchBar
