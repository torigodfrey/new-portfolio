import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
class Footer extends React.Component{ 
	render(){
		return(
			<footer>
				<a href="mailto:victorialgodfrey@gmail.com"> <FontAwesomeIcon icon={ faEnvelope } className="social-icon" /></a>
				<a href="https://github.com/inertiawhoosh"><FontAwesomeIcon icon={ faGithub} className="social-icon" /></a>
				<a href="https://www.linkedin.com/in/victoria-godfrey/"><FontAwesomeIcon icon={ faLinkedin} className="social-icon" /></a>
			</footer>		
		)
	}
}

export default Footer;