import React from 'react';
import { compose, withState, withHandlers, withProps } from 'recompose';
import { Link } from 'react-router-dom';

import { GHSearchUsers } from 'containers';

import _ from 'lodash';

import './styles.css';

const Home = ({ onChange, users }) => (
  <div>
    <input type="text" onChange={e => onChange(e.target.value) }/>
    <ul>{ users }</ul>
  </div>
)

export default compose(
  withState('q', 'search', ''),
  withHandlers({
    onChange: ({ search }) => _.debounce(search, 500)
  }),
  GHSearchUsers,
  withProps(({ results }) => ({
    users: results.map(({ id, login })=> 
      <li key={id}>
        <Link to={`/users/${login}`}>{login}</Link>
      </li>
    )
  })),
)(Home);
