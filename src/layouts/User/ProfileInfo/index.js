import React from 'react';
import { renderComponent, branch, compose, withProps } from 'recompose';

import { GHUser } from 'containers';
import { Loading } from 'components';

import { matchesProperty } from 'lodash';
import { Title, SubTitle } from './styles.js';

const ProfileInfo = ({ user }) => (
  <div>
    <img alt="repository owner" src={user.avatar_url} />
    <div>
      <Title>{`${user.name}(${user.login})`}</Title>
    </div>
    <div>
      <SubTitle>Email: </SubTitle>
      <span>{ user.email }</span>
    </div>
    <div>
      <SubTitle>Following: </SubTitle>
      <span>{ user.following }</span>
    </div>
    <div>
      <SubTitle>Followers: </SubTitle>
      <span>{ user.followers }</span>
    </div>
    <div>
      <SubTitle>Bio: </SubTitle>
      <span>{ user.bio }</span>
    </div>
  </div>
)

export default compose(
  GHUser,
  branch(
    matchesProperty('user', []),
    renderComponent(props => <Loading />),
  )
)(ProfileInfo);
