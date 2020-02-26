/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/navbar/nav/Nav.js';
import Pages from './components/Pages';
import Footer from './components/footer/footer/Footer';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<Nav />
					<Pages />
					<Footer />
				</Router>
			</div>
		);
	}
}

export default App;
