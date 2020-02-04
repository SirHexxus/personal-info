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
		<li className='list-group-item'>
			<div className='card light'>
				<Link to={`/project/${project._id}`} className='flexCol'>
					<strong>{project.title}</strong>
					<img src={project.image} alt='' />
				</Link>
			</div>
		</li>
	);
}
