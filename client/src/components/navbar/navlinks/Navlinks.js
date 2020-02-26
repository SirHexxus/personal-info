import React from 'react';
import { Link } from 'react-router-dom';

export default function Navlinks() {
	return (
		<>
			<ul className='linkList'>
				<li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='/about'>About Me</Link>
				</li>
				<li>
					<Link to='/portfolio'>Portfolio</Link>
				</li>
				{/* <li><Link to="/admin">Admin</Link></li> */}
				{/* <li><Link to="/project">Project</Link></li> */}
				{/* <li>
					<Link to='/services'>Services</Link>
				</li> */}
				{/* <li><Link to="/nonsense" className='flexItem'>404</Link></li> */}
			</ul>
		</>
	);
}
