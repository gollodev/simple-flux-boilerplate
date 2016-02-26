import React from 'react';
import { Router, Route } from 'react-router';
import ReactDom from 'react-dom';
import { createHistory } from 'history';
import Index from '../components/index.jsx';
import About from '../components/about.jsx';
import Page from '../components/page.jsx';


const Routes = (
	<Router history={createHistory()}>
		<Route path="/" component={Index}/>
		<Route path="/about" component={About}/>
		<Route path="/page" component={Page}/>		
	</Router>
);

ReactDom.render(Routes, document.getElementById('app'));

