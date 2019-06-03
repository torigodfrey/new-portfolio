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
		return(<div className="project-container">
				<h3>{project.title}</h3>
					<div className="project">
						<img src={project.img} className = "portfolio-photo" alt="recipe box main screen" />
						<div className="project-box">
							<div className="project-description">
								<p className="description">{project.description}</p>
								<ul className="project-ul">
									<li className="project-button"><a href={project.live}>Live</a></li>
									<li className="project-button"><a href={project.repo}>Repo</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>)
	}
	render(){
		const { projects } = this.state;
		const displayProjects = projects.map((project) => this.projectHTML(project))
		return(
			<div id="projects-container">
				<h2> My Work</h2>
				<hr />
				{displayProjects}
			</div>	
		)
	}
}

export default Projects;