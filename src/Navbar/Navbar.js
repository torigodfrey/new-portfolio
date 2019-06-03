import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{ 
	render(){
		return(
			<nav role="navigation">
				<h1>Tori Godfrey</h1>
				<ul className="nav-ul">
					<li className="nav-li"><Link to={`/`}>About</Link></li>
					<li className="nav-li"><Link to={`/Projects`}>Projects</Link></li>
				</ul>
			</nav>		
		)
	}
}

export default Navbar;