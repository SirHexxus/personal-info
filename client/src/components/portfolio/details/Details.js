import React, { Component } from 'react';

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
			.catch(err => console.log(err));
	};

	render() {
		const { title, id, repoURL, deployedURL, image } = this.state.project;
		const { description: desc } = this.state.project;
		return (
			<>
				<p>
					<strong>Title</strong>: {title}
				</p>
				<img src={image} alt={title} />
				<p>
					<p>
						<strong>ID</strong>: {id}
					</p>
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
			</>
		);
	}
}
