import { renameProp, compose } from 'recompose';
import { GHResourceFetch } from 'containers';

export default compose(
  GHResourceFetch(
    (gh, props) => gh.getUser(props.q).listRepos()
  ),
  renameProp('data', 'repos'),
)
