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
					<a
						href='mailto:jamesmichaelstacy@gmail.com'
						target='_blank'
					>
						<i className='fas fa-envelope' />{' '}
						JamesMichaelStacy@gmail.com
					</a>
				</li>
			</ul>
			<ul className='list social'>
				<h3>Professional Social Media:</h3>
				<li>
					<a
						href='https://www.facebook.com/jmswebdesigns/'
						target='_blank'
					>
						<i className='fab fa-facebook' /> Facebook
					</a>
					{'  '}| {'  '}
					<a href='https://m.me/jmswebdesigns' target='_blank'>
						<i className='fab fa-facebook-messenger' /> Messenger
					</a>
				</li>
				<li>
					<a href='https://github.com/SirHexxus' target='_blank'>
						<i className='fab fa-github' /> Github
					</a>
				</li>
				<li>
					<a
						href='https://www.linkedin.com/in/james-m-stacy'
						target='_blank'
					>
						<i className='fab fa-linkedin' /> LinkedIn
					</a>
				</li>
				<li>
					<a
						href='https://twitter.com/JamesSt77096668'
						target='_blank'
					>
						<i className='fab fa-twitter' /> Twitter
					</a>
				</li>
			</ul>
		</div>
	);
}
