import React from 'react';
import { Link } from 'react-router-dom';
const images = require.context('../../../images', true);

// This file exports both the List and ListItem components

export function List({ children }) {
	return (
		<>
			<ul className='flexRow'>{children}</ul>
		</>
	);
}

export function ListItem({ project }) {
	let thePic =
		project.image.substring(0, 4) === 'http'
			? project.image
			: images(`./${project.image}`);
	return (
		<li>
			<Link
				to={`/project/${project._id}`}
				className='card accentDark flexCol projectCard'
			>
				<img src={thePic} alt='' />
				<h2>
					<strong>{project.title}</strong>
				</h2>
				<p style={{ textAlign: 'center' }}>{project.description}</p>
			</Link>
		</li>
	);
}
