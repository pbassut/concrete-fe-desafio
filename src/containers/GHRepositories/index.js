import React from 'react';
import GitHub from 'github-api';
import { withProps, withState, defaultProps, compose } from 'recompose';

import axios from 'axios'

export default userName => compose(
  defaultProps({ token: '6161008b690c758f357327ad95309f84db53b39e' }),
  withState('data', 'setData', null),
  withProps(({ setData, token }) => {
    const gh = new GitHub({ token });
    gh.getUser(userName).listRepos((err, repos) =>
      setData(repos)
    );
  }),
)
