import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import Home from 'layouts/Home';

import './styles.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Search</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
