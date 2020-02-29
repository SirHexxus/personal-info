import React from 'react';

export default function Index() {
	return (
		<div className='pageCol index card accentLight'>
			<div className='card dark titleCard'>
				<h3>Welcome to</h3>
				<h1 className='name'>JMS Web Designs</h1>
				<h4 className='title'>
					<span>Full-Stack Web and Mobile Development</span>
				</h4>
			</div>
			<div className='card dark'>
				<h3 className='card'>
					As a full stack developer for web and mobile business
					applications, We:
				</h3>
				<ul>
					<li className='card'>
						- Specialize in React front end applications and
						Node.js/Express back end applications.
					</li>
					{/* <hr /> */}
					<li className='card'>
						- Utilize React Native to create a single codebase for
						both Android and IOS Mobile Applications.
					</li>
					{/* <hr /> */}
					<li className='card'>
						- Leverage our entrepreneurial, business, and industrial
						experience to maximize the service we provide.
					</li>
				</ul>
				<h2 className='card accentDark centered'>
					Please Click The Links In the Navbar For More Information
				</h2>
			</div>
		</div>
	);
}
