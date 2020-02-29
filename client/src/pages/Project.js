import React, { Component } from 'react';
import API from '../utils/API';
const images = require.context('../images', true);

export default class Project extends Component {
	state = {
		project: {
			title: '',
			repoURL: '',
			deployedURL: '',
			image: '',
			_id: '',
			description: ''
		}
	};

	componentDidMount() {
		this.loadProject();
	}

	loadProject = () => {
		API.getProject(this.props.match.params.id)
			.then(res => {
				console.log(res.data);
				this.setState({
					project: res.data
				});
			})
			.catch(err => {
				console.log(`err: ${err}`);
			});
	};

	render() {
		const { title, repoURL, deployedURL, image } = this.state.project;
		const { _id: id, description: desc } = this.state.project;
		let thePic = image
			? image.substring(0, 4) === 'http'
				? image
				: images(`./${image}`)
			: '';
		return (
			<div className='card flexCol project'>
				<div className='card flexCol dark'>
					<h1 className='name'>{title}</h1>
					<h6 className='title'>
						<span>
							<strong>ID</strong>: {id}
						</span>
					</h6>
					<img src={thePic} alt={title} />
					<p className='card flexCol light desc'>
						<strong>Description:</strong> {desc}
					</p>
					<ul className='flexCol'>
						{deployedURL ? (
							<li>
								<a href={deployedURL} target='_blank'>
									See It Live
								</a>
							</li>
						) : (
							<li>
								<p>No Deployment Link (See Description)</p>
							</li>
						)}
						<li>
							<a href={repoURL} target='_blank'>
								See The Source Code
							</a>
						</li>
						<br />
						<li>
							<a href='/portfolio'>← Back To Portfolio</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
