import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{ 
	render(){
		return(
			<nav role="navigation">
				<h1>Tori Godfrey</h1>
				<ul class="nav">
					<li className="nav-li"><a href="#">About</a></li>
					<li className="nav-li"><a href="#">Projects</a></li>
				</ul>
			</nav>		
		)
	}
}

export default Navbar;