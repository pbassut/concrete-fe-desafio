import { renameProp, compose } from 'recompose';
import { GHResourceFetch } from 'containers';

export default compose(
  GHResourceFetch(
    ({ gh, username }) => gh.getUser(username).listRepos()
  ),
  renameProp('data', 'repos'),
)
