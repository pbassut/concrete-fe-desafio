import React from 'react';
import { branch, renderComponent, withState, compose, withProps } from 'recompose';
import { Link } from 'react-router-dom';
import { isEmpty, matchesProperty } from 'lodash';

import { GHListRepositories } from 'containers';
import { Loading } from 'components';

import Star from './Star';
import EmptyMessage from './EmptyMessage';
import { StarCount } from './styles.js';

const RepoList = ({ sortAsc, ascending, repos })=> (
  <div>
    <h1>Repositories</h1>

    <button href="#sorting" onClick={() => sortAsc(sort => !sort)}>
      { ascending ? 'Ascending' : 'Descending'}
    </button>

    <ul>
      { repos.map(repo =>
        <div key={repo.id}>
          <Link to={`/users/${repo.full_name}`}>{repo.name}</Link>   
          <StarCount>
            <Star />{repo.stargazers_count}
          </StarCount>
        </div>
      )}
    </ul>
  </div>
)

export default compose(
  withState('ascending', 'sortAsc', false),
  GHListRepositories,
  branch(
    matchesProperty('repos', null),
    renderComponent(Loading),
    branch(
      props => isEmpty(props.repos),
      renderComponent(EmptyMessage),
    )
  ),
  withProps(({ ascending, repos }) => ({
    repos: repos.sort(({ stargazers_count: s1 }, { stargazers_count: s2}) =>
      ascending ? s1 - s2 : s2 - s1
    )
  })),
)(RepoList);
