import React from 'react';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import AboutBlurb from '../AboutBlurb/AboutBlurb'


class AboutPage extends React.Component {
	render(){
  	return (
	    <main className='App'>
	      <Navbar />
	      <Footer />
	      <AboutBlurb />
	    </main>
	  );
	}
}

export default AboutPage;