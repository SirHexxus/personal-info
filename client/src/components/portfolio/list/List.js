import React from 'react';
import { Link } from 'react-router-dom';

// This file exports both the List and ListItem components

export function List({ children }) {
	return (
		<>
			<ul className='flexRow'>{children}</ul>
		</>
	);
}

export function ListItem({ project }) {
	return (
		<li>
			<Link
				to={`/project/${project._id}`}
				className='card dark flexCol project'
			>
				<img src={project.image} alt='' />
				<h2>
					<strong>{project.title}</strong>
				</h2>
				<p style={{ textAlign: 'center' }}>{project.description}</p>
			</Link>
		</li>
	);
}
