import { defaultProps, renameProp, compose } from 'recompose';
import { GHResourceFetch } from 'containers';

export default compose(
  defaultProps({ start: true }),
  GHResourceFetch(
    (gh, { q }) => gh.getUser(q).getProfile()
  ),
  renameProp('data', 'user'),
)
