import React, { Component } from 'react';
import { List, ListItem } from '../components/portfolio/list/List';
import API from '../utils/API';

export default class Portfolio extends Component {
	state = {
		projects: []
	};

	componentDidMount() {
		this.loadProjects();
	}

	loadProjects = () => {
		API.getProjects()
			.then(res => this.setState({ projects: res.data }))
			.catch(err => console.log(err));
	};

	/*
      deleteProject = id => {
      API.deleteProject(id)
        .then(res => this.loadprojects())
        .catch(err => console.log(err));
    };
 */

	/*  
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
 */

	/* 
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveProject({
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis
          })
            .then(res => this.loadprojects())
            .catch(err => console.log(err));
        }
      };
 */

	render() {
		return (
			<div className='pageCol'>
				<div className='card accentDark jumbotron'>
					<h1>My Portfolio</h1>
				</div>
				{this.state.projects.length ? (
					<div
						className='card accentLight flexCol'
						style={{ marginTop: '10rem', width: '90vw' }}
					>
						<h1>Projects:</h1>
						<List>
							{this.state.projects.map(project => (
								<ListItem key={project._id} project={project} />
							))}
						</List>
					</div>
				) : (
					<div className='card light'>
						<h3>No Results to Display</h3>
					</div>
				)}
			</div>
		);
	}
}