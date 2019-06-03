import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage'
import ProjectsPage from './ProjectsPage/ProjectsPage'

class App extends React.Component {
 componentDidMount(){
    document.title = "Tori Godfrey Portfolio"
  }

  render(){
  return (
   <Router>
    <Route
      exact path='/'
      component={AboutPage}
    />
    <Route
      exact path='/projects'
      component={ProjectsPage}
    />
   </Router>
  );
 }
}

export default App;