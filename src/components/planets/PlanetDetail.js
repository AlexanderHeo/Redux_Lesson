import React, { Component } from 'react'
import * as style from './PlanetDetail.css'

const PLANET_URL = 'https://swapi.dev/api/planets'

class PlanetDetail extends Component {
	_isMounted = false
	state = { planet: {} }

	async componentDidMount() {
		this._isMounted = true
		try {
			const res = await fetch(`${PLANET_URL}/${this.props.match.params.id}`)
			const planet = await res.json()
			if (this._isMounted) {
				this.setState({ planet: planet })
			}
		} catch (e) {
			console.error('PlanetDetail error: ', e)
		}
	}

	componentWillUnmount() {
		this._isMounted = false
	}

	render() {
		const planet = this.state.planet
		return (
			<div className={style.detail}>
				<div><span>Name: </span>{planet.name}</div>
				<div><span>Climate: </span>{planet.climate}</div>
				<div><span>Terrain: </span>{planet.terrain}</div>
				<div><span>Gravity: </span>{planet.gravity}</div>
				<div><span>Population: </span>{planet.population}</div>
			</div>
		)
	}
}

export default PlanetDetail
