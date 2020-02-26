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

	loadProjects = function() {
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
		let { projects } = this.state;
		console.log(projects);
		return (
			<div className='pageCol card portfolio'>
				<div className='card dark' style={{ marginTop: '3rem' }}>
					<h1 className='name'>Featured Projects</h1>
					<h4 className='title'>
						<span>
							Please Take A Look At Some of Our Most Recent
							Projects
						</span>
					</h4>
				</div>
				{projects.length > 0 ? (
					<div className='card accentDark flexCol'>
						<List>
							{projects.map(project => (
								<ListItem key={project._id} project={project} />
							))}
						</List>
					</div>
				) : (
					<div className='card dark flexCol'>
						<h3>No Results to Display</h3>
						<h4>Please Wait for Projects to Load</h4>
					</div>
				)}
			</div>
		);
	}
}
