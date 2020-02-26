import React from 'react';

export default function PersonalText() {
	return (
		<div className='card dark flexCol personal'>
			<h4 className='greeting'>Hello! My name is:</h4>
			<h1 className='name'>
				<strong>James Stacy</strong>
			</h1>
			<h4 className='title'>
				<span>Full Stack Web and Mobile Developer</span>
			</h4>
			<hr />
			<p>
				I am a Full Stack Web Developer with a background in Weighing
				and Measurement and a life-long dedication to solving problems.
				I have been recognized as effective at solving problems based on
				customer or client needs, and being able to adapt to unfamiliar
				situations. I am also well known for my quick wit, attention to
				detail, and decisive leadership as a Project Manager in several
				small projects.
			</p>
			<ul className='list info'>
				<h3>Contact and Location Info:</h3>
				<li>
					<i className='fas fa-home' /> Southern California
				</li>
				<li>
					<i className='fas fa-phone' /> 1(951) 805-3811
				</li>
				<li>
					<a href='mailto:jamesmichaelstacy@gmail.com'>
						<i className='fas fa-envelope' />{' '}
						JamesMichaelStacy@gmail.com
					</a>
				</li>
			</ul>
			<ul className='list social'>
				<h3>Professional Social Media:</h3>
				<li>
					<a href='https://www.facebook.com/jmswebdesigns/'>
						<i className='fab fa-facebook' /> Facebook
					</a>
				</li>
				<li>
					<a href='https://github.com/SirHexxus'>
						<i className='fab fa-github' /> Github
					</a>
				</li>
				<li>
					<a href='https://www.linkedin.com/in/james-m-stacy'>
						<i className='fab fa-linkedin' /> LinkedIn
					</a>
				</li>
			</ul>
		</div>
	);
}
