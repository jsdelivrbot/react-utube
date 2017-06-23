import React from 'react'

class SearchBar extends React.Component {

	constructor(props) {
		super(props)

		this.state = { term: 'alexis rocks'}
		this.onInputChange = this.onInputChange.bind(this)

	}

	onInputChange(e) {
		this.setState({term: e.target.value})
	}

	render() {
		return (
			<div>
			<input onChange= {this.onInputChange} value = {this.state.term}  />
			</div>
		)
	}
}

export default SearchBar