import React, { Component } from 'react'
import Char from './Char'

class CharsList extends Component {
	_isMounted = false
	state = {
		characters: [],
	}

	async componentDidMount() {
		this._isMounted = true
		try {
			const res = await fetch('https://swapi.dev/api/people/?page=1')
			const characters = await res.json()
			if (this._isMounted) {
				this.setState({
					characters: characters.results
				})
			}
		} catch (e) {
			console.error('error: ', e)
		}
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	render() {
		return (
			<div>
				{
					this.state.characters.map(char => (
						<Char
							key={ char.url }
							char={ char } />
					))
				}
			</div>
		)
	}
}

export default CharsList
