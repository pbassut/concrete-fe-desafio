import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from 'layouts/Home';
import UserPage from 'layouts/UserPage';
import RepositoryPage from 'layouts/RepositoryPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users/:username/" component={UserPage}/>
          <Route exact path="/users/:username/:repo" component={RepositoryPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
