import React from 'react';
import { compose, renameProp, withHandlers, withProps } from 'recompose';
import { Link } from 'react-router-dom';

import { debug } from 'composables';
import { GHListRepositories } from 'containers';

import _ from 'lodash';

import ProfileInfo from './ProfileInfo';
import './styles.css';

const UserPage = ({ username, repos }) => (
  <div>
    <ProfileInfo username={username} />
    <h1>Repositórios: </h1>
    <ul>
      { repos.map(r =>
        <div key={r.id}>
          <span>
            <Link to={`/users/${r.full_name}`}>{r.name}</Link>   
            Stars: {r.stargazers_count}
          </span>
        </div>
      )}
    </ul>
  </div>
)

export default compose(
  withProps(props => ({ q: props.match.params.username })),
  GHListRepositories,
  withProps(props => ({
    repos: props.repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
  })),
)(UserPage);
