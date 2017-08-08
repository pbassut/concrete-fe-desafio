import React from 'react';
import { branch, renderComponent, compose, withProps } from 'recompose';
import { matchesProperty } from 'lodash';

import { GHRepository } from 'containers';
import { Loading } from 'components';

import './styles.css';

const RepositoryPage = ({ repository }) => (
  <div>
    <h1>{repository.full_name}</h1>
    <h2>{repository.description}</h2>
    <h2>Stars: {repository.stargazers_count}</h2>
    <h2>Language: {repository.language}</h2>
    <a target="blank" href={repository.html_url}>Open at Github</a>
  </div>
)

export default compose(
  withProps(props => ({
    username: props.match.params.username,
    repo: props.match.params.repo,
  })),
  GHRepository,
  branch(
    matchesProperty('repository', null),
    renderComponent(Loading),
  ),
)(RepositoryPage);
