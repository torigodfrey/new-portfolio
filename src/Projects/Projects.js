import React from 'react';
import './Projects.css'
import projectStore from './projectStore'

class Projects extends React.Component{ 
	state = {
		projects: [],
	}

	componentDidMount(){
		this.setState(projectStore)
	}


	projectHTML(project){
		return(<div key={project.title} className="project-container">
					<div className="project-name">
						<h3>{project.title}</h3>
							<div className="project">
								<img src={project.img} className = "portfolio-photo" alt="recipe box main screen" />
								<div className="project-box">
									<div className="project-description">
										<p className="description">{project.description}</p>
									</div>
								</div>
							</div>
							<a href={project.live} className="button-links">
								<p className="link-text">Live</p>
							</a>
							<a href={project.repo} className="button-links">
								<p className="link-text">Repo</p>
							</a>
					</div>
				</div>)
	}
	render(){
		const { projects } = this.state;
		const displayProjects = projects.map((project) => this.projectHTML(project))
		return(
			<div id="projects-container">
				<div className="decorative-line">
					<h2 className="project-title"> My Work</h2>
				</div>
				<div className="project-flex">
					{displayProjects}
				</div>
			</div>	
		)
	}
}

export default Projects;