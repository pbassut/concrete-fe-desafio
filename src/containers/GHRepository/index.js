import { renameProp, compose } from 'recompose';
import { GHResourceFetch } from 'containers';

export default compose(
  GHResourceFetch(
    (gh, { username, repo }) => gh.getRepo(username, repo).getDetails()
  ),
  renameProp('data', 'repository'),
)
