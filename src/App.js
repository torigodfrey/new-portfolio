import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage'
import ProjectsPage from './ProjectsPage/ProjectsPage'
function App() {
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

export default App;