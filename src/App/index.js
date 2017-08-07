import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'layouts/Home';
import UserPage from 'layouts/UserPage';

import './styles.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/users/:username/" component={UserPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
