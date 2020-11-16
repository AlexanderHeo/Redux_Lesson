import React, { Component } from 'react'
import * as style from './CharsDetail.css'

const CHAR_URL = 'https://swapi.dev/api/people'

class CharsDetail extends Component{
	_isMounted = false
	state = { character: {} }

	async componentDidMount() {
		this._isMounted = true
		try {
			const res = await fetch(`${CHAR_URL}/${this.props.match.params.id}`)
			const char = await res.json()
			if (this._isMounted) {
				this.setState({ character: char })
			}
		} catch (e) {
			console.error('error: ', e)
		}
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	render () {
		const char = this.state.character
		return (
			<div className={style.detail}>
				<div><span>Name: </span>{char.name}</div>
				<div><span>Birthyear: </span>{char.birth_year}</div>
				<div><span>Eye Color: </span>{char.eye_color}</div>
				<div><span>Hair Color: </span>{char.hair_color}</div>
				<div><span>Height: </span>{char.height}cm</div>
				<div><span>Mass: </span>{char.mass}kg</div>
			</div>
		)
	}
}

export default CharsDetail
