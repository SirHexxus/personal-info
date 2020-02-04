import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Portfolio from '../pages/Portfolio.js';
import About from '../pages/About.js';
import ErrorNotFound from '../pages/ErrorNotFound.js';
import Admin from '../pages/Admin.js';
import Project from '../pages/Project.js';
import Services from '../pages/Services.js';

export default function Pages() {
	return (
		<>
			<Switch>
				<Route exact path='/' component={Index} />
				<Route path='/portfolio' component={Portfolio} />
				<Route path='/admin' component={Admin} />
				<Route path='/project/:id' component={Project} />
				<Route path='/about' component={About} />
				<Route path='/services' component={Services} />
				<Route path='*' component={ErrorNotFound} />
			</Switch>
		</>
	);
}
