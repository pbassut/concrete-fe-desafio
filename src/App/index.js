import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from 'layouts/Search';
import User from 'layouts/User';
import Repository from 'layouts/Repository';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Search}/>
          <Route exact path="/users/:username/" component={User}/>
          <Route exact path="/users/:username/:repo" component={Repository}/>
        </div>
      </Router>
    );
  }
}

export default App;
