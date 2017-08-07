import { defaultProps, withProps, renameProp, compose } from 'recompose';
import { GHResourceFetch } from 'containers';
import { debug } from 'composables';

import _ from 'lodash';

export default compose(
  defaultProps({ start: true }),
  GHResourceFetch(
    (gh, { q }) => gh.getUser(q).getProfile()
  ),
  renameProp('data', 'user'),
)
