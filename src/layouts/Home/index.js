import React from 'react';
import { compose, withState, withHandlers, withProps } from 'recompose';
import { Link } from 'react-router-dom';

import { debug } from 'composables';
import { GHUsers } from 'containers';

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
  GHUsers,
  withProps(({ users }) => ({
    users: users.map(({ id, login })=> 
      <li key={id}>
        <Link to={`/users/${id}`}>{login}</Link>
      </li>
    )
  })),
)(Home);
