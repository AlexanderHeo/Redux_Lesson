import React from 'react'
import { Link, Route } from 'react-router-dom'
import * as style from './Char.css'
import CharsDetail from './CharsDetail'

const Char = (props) => {
	const id = props.char.url.split('/')[5]
	return(
		<>
			<Link to={`/characters/${id}`} >
				<div className={ style.character }>
					<span>
						{ props.char.name }
					</span>
				</div>
			</Link>
			<Route path={'characters/:id'} component={CharsDetail} />
		</>
	)
}

export default Char
