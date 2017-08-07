import { branch, withProps, renameProp, compose } from 'recompose';
import { GHResourceFetch } from 'containers';
import { debug } from 'composables';

import _ from 'lodash';

export default compose(
  GHResourceFetch(
    (gh, { q }) => gh.search({ q }).forUsers()
  ),
  renameProp('data', 'results'),
)
