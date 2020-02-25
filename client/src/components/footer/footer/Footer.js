import React from 'react';

export default function Footer() {
	return (
		<div className='footer'>
			<span>
				Copyright JMS Web Designs/James Stacy &copy;{' '}
				{new Date().getFullYear()}
			</span>
			<br />
			<span>All rights reserved</span>
		</div>
	);
}
