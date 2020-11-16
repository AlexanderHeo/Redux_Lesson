import React from 'react'
import { Link } from 'react-router-dom'
import * as style from './Char.css'

const Char = ({char, handleClick}) => {
	const id = char.url.split('/')[5]
	return(
		<>
			<Link to={`/${id}`} >
				<div className={ style.character }>
					<span>
						{ char.name }
					</span>
				</div>
			</Link>
		</>
	)
}

export default Char
