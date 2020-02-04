//  Package Variable Declarations
const mongoose = require('mongoose');

//  Package Dependent Variable Declarations
const Schema = mongoose.Schema;

//  New Schema Declaration
const ProjectSchema = new Schema({
	//  //  Defines the fields for the UserSchema
	title: { type: String, default: '', required: true },
	description: { type: String, required: true },
	repoURL: { type: String, required: false },
	deployedURL: { type: String, required: false },
	image: {
		type: String,
		default:
			'https://via.placeholder.com/150/0B2A97/E8DDDD?Text=No+Relevant+Image+For+This+Project',
		required: true
	},
	tags: { type: Array, default: false }
});

//  Exports
//  //  Declares User using the UserSchema
const Project = mongoose.model('Project', ProjectSchema);
//  //  Exports the User Model
module.exports = Project;
