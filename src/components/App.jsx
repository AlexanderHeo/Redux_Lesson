import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom'
import * as style from './App.css'
import CharsDetail from './characters/CharsDetail'
import CharsList from './characters/CharsList'
import Home from './Home'
import PlanetDetail from './planets/PlanetDetail'
import PlanetsList from './planets/PlanetsList'

class App extends Component {
	render() {
		return (
			<Router>
				<div className={style.app}>
					<header className={style.header}>
						<ul>
							<li><NavLink to="/" activeClassName={style.active}>Home</NavLink></li>
							<li><NavLink to="/characters" activeClassName={style.active}>Characters</NavLink></li>
							<li><NavLink to="/planets" activeClassName={style.active}>Planets</NavLink></li>
						</ul>
					</header>
					<Switch>
						<Route path="/characters/:id" component={CharsDetail} />
						<Route path="/characters" component={CharsList} />
						<Route path="/planets/:id" component={PlanetDetail} />
						<Route path="/planets" component={PlanetsList} />
						<Route exact path="/" component={Home} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
