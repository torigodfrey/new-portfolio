import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutPage from './AboutPage/AboutPage'

function App() {
  return (
   <Router>
    <Route
      exact path='/'
      component={AboutPage}
    />
    <Route
      exact path='/projects'
    />
   </Router>
  );
}

export default App;