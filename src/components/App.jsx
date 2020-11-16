import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import * as style from './App.css'
import CharsDetail from './CharsDetail'
import CharsList from './CharsList'

class App extends Component {
	render() {
		return (
			<Router>
				<div className={style.app}>
					<header className={style.header}>
						<Link to="/">Home</Link>
					</header>
					<h3>Star Wars</h3>
					<Switch>
						<Route exact path="/" component={CharsList} />
						<Route path="/:id" component={CharsDetail} />
					</Switch>
				</div>
			</Router>
		)
	}
}

export default App
