import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
	render() {
		return (
			<ul>
        		<li><Link to="about">About</Link></li>
        		<li><Link to="page">Page</Link></li>
        	</ul>  
		);
	}	
}

export default Nav;