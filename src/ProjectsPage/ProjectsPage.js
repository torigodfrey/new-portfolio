import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Projects from '../Projects/Projects'
import './ProjectsPage.css'

class ProjectsPage extends React.Component {
	render(){
  	return (
	    <div className='App'>
	      <Navbar />
	      <Footer />
	      <Projects />
	    </div>
	  );
	}
}

export default ProjectsPage;