import React from 'react';
import { withState, compose, withProps } from 'recompose';
import { Link } from 'react-router-dom';

import { GHListRepositories } from 'containers';

import ProfileInfo from './ProfileInfo';
import './styles.css';

const UserPage = ({ username, repos, sortAsc, ascending }) => (
  <div>
    <ProfileInfo username={username} />
    <a href="#sorting" onClick={() => sortAsc(sort => !sort)}>{ ascending ? 'Ascending' : 'Descending'}</a>
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
  withState('ascending', 'sortAsc', false),
  withProps(props => ({ username: props.match.params.username })),
  GHListRepositories,
  withProps(({ ascending, repos }) => ({
    repos: repos.sort(({ stargazers_count: s1 }, { stargazers_count: s2}) =>
      ascending ? s1 - s2 : s2 - s1
    )
  })),
)(UserPage);
