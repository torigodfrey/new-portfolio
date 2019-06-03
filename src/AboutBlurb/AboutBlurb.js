import React from 'react';
import './AboutBlurb.css'


class AboutBlurb extends React.Component {
	render(){
  	return (
	 
		<section id="about-me"> 
			<p id="headline">
			I'm Tori, a web developer with a background in Customer Success.
			</p>
			<p id = "bio">
			My passion for front-end development started in middle school when I built and sold custom profiles for an online game. My interest expanded as I put my skills to use making Live Journal layouts and customizing my MySpace page. In hindsight, that is a very early 2000 sentence. Though, my path back to web development is unconventional, and has taken me all over the world working in fields ranging from education to policy, I am happy to be doing what I truly love. When I'm not pushing to github, I like to work on my waltz jump (ice skating), go to theme parks, and try my hand at home brewing.
			</p>
		</section>

	  );
	}
}

export default AboutBlurb;