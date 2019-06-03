import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Projects from '../Projects/Projects'


class ProjectsPage extends React.Component {
	render(){
  	return (
	    <main className='App'>
	      <Navbar />
	      <Footer />
	      <Projects />
	    </main>
	  );
	}
}

export default ProjectsPage;