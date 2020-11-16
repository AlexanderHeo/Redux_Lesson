import React, { Component } from 'react'
import Planet from './Planet'

class PlanetsList extends Component {
	isMounted = false
	state = { planets: [] }

	async componentDidMount() {
		this._isMounted = true
		try {
			const res = await fetch('https://swapi.dev/api/planets/?page=1')
			const planets = await res.json()
			if (this._isMounted) {
				this.setState({
					planets: planets.results
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
					this.state.planets.map(planet => {
						const id = planet.url.split('/')[5]
						return <Planet
							planet={planet}
							key={ id }
							id={ id }
						/>
					})
				}
			</div>
		)
	}
}

export default PlanetsList
