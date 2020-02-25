import React, { Component } from 'react';
import API from '../utils/API';

export default class Project extends Component {
	state = {
		project: {}
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
		return (
			<div
				className='card flexCol accentDark'
				style={{ marginTop: '10rem', height: '75vh' }}
			>
				<p>
					<strong>Title</strong>: {title}
				</p>
				<img src={image} alt={title} />
				<span>
					<strong>ID</strong>: {id}
				</span>
				<p>
					<strong>Description:</strong> {desc}
				</p>
				{deployedURL ? (
					<React.Fragment>
						<a href={deployedURL}>See It Live</a>
					</React.Fragment>
				) : (
					<React.Fragment>
						<p>No Deployment Link (See Description)</p>
					</React.Fragment>
				)}
				<br />
				<a href={repoURL}>See The Source Code</a>
				<br />
				<a href='/'>← Back To Home</a>
			</div>
		);
	}
}
