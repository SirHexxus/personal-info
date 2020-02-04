import axios from 'axios';

export default {
	// Gets all projects
	getProjects: () => {
		return axios.get('/api/projects');
	},
	// Gets the project with the given id
	getProject: id => {
		return axios.get(`/api/project/${id}`);
	},
	// Deletes the project with the given id
	deleteProject: id => {
		return axios.delete(`/api/project/${id}`);
	},
	// Saves a project to the database
	saveProject: projectData => {
		return axios.post('/api/project/', projectData);
	},
	updateProject: (id, data) => {
		return axios.put(`/api/project/${id}`, data);
	}
};
