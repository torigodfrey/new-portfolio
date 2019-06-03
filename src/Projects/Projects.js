import React from 'react';
import './Projects.css'
import RecipeBox from '../Pictures/recipebox.png'
import dummyStore from './dummyStore'

class Projects extends React.Component{ 
	state = {
		projects: [],
	}

	componentDidMount(){
		this.setState(dummyStore)
	}


	projectHTML(project){
		return(<div className="project">
				<img src={project.img} className = "portfolio-photo" alt="recipe box main screen" />
			</div>)
	}
	render(){
		const { projects } = this.state;
		const displayProjects = projects.map((project) => this.projectHTML(project))
		return(
			<main role="main" id="projects-container">
				<h2> My Work</h2>
				<hr />
				{displayProjects}
			</main>	
		)
	}
}

export default Projects;