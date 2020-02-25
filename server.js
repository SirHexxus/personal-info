//  Package Variable Declarations
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

//  Package Dependent Variable Declarations
const app = express();

//  Global Variable Declarations
const PORT = process.env.PORT || 5000;

//  File Import Variable Declarations
//  //  Configuration for MongoDB
const db = require('./config/keys').mongoURI;

//  Middleware Method Calls
//  //  Allows the creation of nested objects from a query string
app.use(express.urlencoded({ extended: false }));
//  //  Recognizes incoming Request Objects as JSON Objects
app.use(express.json());
//  //  Configures MongoDB options to avoid deprication errors
const configOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

//  Production Only Assets
//  //  Serve static assets if app is in production
if (process.env.NODE_ENV === 'production') {
	//  //  Set static folder
	app.use(express.static('client/build'));
	//  //  GET all relevant information, and send it to where it needs to be
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

// Routes
app.use('/api', require('./routes/projectRoutes'));

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
