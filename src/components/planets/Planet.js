import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as style from './Planet.css'
import PlanetDetail from './PlanetDetail'

const Planet = props => {
	return (
		<>
			<Link to={`/planets/${props.id}`} >
				<div className={ style.planet }>
					<span>{ props.planet.name }</span>
				</div>
			</Link>
			<Route path={ 'planets/:id' } component={ PlanetDetail } />
		</>
	)
}

export default Planet
