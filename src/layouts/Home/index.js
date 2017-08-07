import React from 'react';
import { compose, withHandlers, withProps } from 'recompose';

import { debug } from 'composables';
import { GHRepositories } from 'containers';

import './styles.css';

const Home = props => (
  <div>
    <input type="text" onChange={props.onChange}/>
    <ul>
      <li>Nome</li>
    </ul>
  </div>
)

export default compose(
  GHRepositories('pbassut'),
  debug,
  withHandlers({
    onChange: props => () => {
    },
  }),
)(Home);
