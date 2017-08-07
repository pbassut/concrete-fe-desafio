import React from 'react';
import { compose, renameProp, withHandlers, withProps } from 'recompose';
import { Link } from 'react-router-dom';

import { debug } from 'composables';
import { GHRepository } from 'containers';

import _ from 'lodash';

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
  debug,
)(RepositoryPage);
