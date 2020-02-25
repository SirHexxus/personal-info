//  Package Variable Declarations
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

//  Package Dependent Variable Declarations
const app = express();

//  Global Variable Declarations
const PORT = process.env.PORT || 5000;

//  File Import Variable Declarations
//  //  Configuration for MongoDB
const db = process.env.MONGODB_URI || require('./config/default.json').mongoURI;

//  Middleware Method Calls
//  //  Allows the creation of nested objects from a query string
app.use(express.urlencoded({ extended: true }));
//  //  Recognizes incoming Request Objects as JSON Objects
app.use(express.json());
//  //  Set static folder
app.use(express.static(path.join(__dirname, 'client', 'build')));
//  //  Configures MongoDB options to avoid deprecation errors
const configOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

// Routes
//	//	api Routes
app.use('/api', require('./routes/projectRoutes'));
//  //  static Routes
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

//  Connections
//  //  Connecting to MongoDB
mongoose
	.connect(db, configOptions)
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));

//  //  Starting the server, syncing our models ------------------------------------/
app.listen(PORT, () => {
	console.log(
		'==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
		PORT,
		PORT
	);
});

//  Exports
module.exports = app;
