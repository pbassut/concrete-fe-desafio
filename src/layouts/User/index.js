import React from 'react';
import { withProps } from 'recompose';

import ProfileInfo from './ProfileInfo';
import RepoList from './RepoList';

const UserPage = ({ username, repos, sortAsc, ascending }) => (
  <div>
    <ProfileInfo username={username} />
    <RepoList username={username} />
  </div>
)

export default withProps(props => ({ 
  username: props.match.params.username 
}))(UserPage);
