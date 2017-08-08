import React from 'react';
import { renderComponent, branch, compose, withProps } from 'recompose';

import { GHUser } from 'containers';
import { Loading } from 'components';

import { matchesProperty } from 'lodash';

const ProfileInfo = ({ user }) => (
  <div>
    <img alt="repository owner" src={user.avatar_url} />
    <h1>{`${user.name}(${user.login})`}</h1>
    <h2>Email: { user.email }</h2>
    <h2>Following: { user.following }</h2>
    <h2>Followers: { user.followers }</h2>
    <h2>Bio: { user.bio }</h2>
  </div>
)

export default compose(
  GHUser,
  branch(
    matchesProperty('user', []),
    renderComponent(props => <Loading />),
  )
)(ProfileInfo);
