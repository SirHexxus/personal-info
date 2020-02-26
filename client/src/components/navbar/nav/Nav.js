import React from 'react';
import NavBrand from '../navBrand/NavBrand';
import NavLinks from '../navlinks/Navlinks';

export default function Nav() {
	return (
		<div className='nav brand'>
			<NavBrand />
			<NavLinks />
		</div>
	);
}
