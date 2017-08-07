import { renameProp, compose } from 'recompose';
import { GHResourceFetch } from 'containers';

export default compose(
  GHResourceFetch(
    (gh, { q }) => gh.getUser(q).listRepos({ direction: 'asc', sort: 'stars', type: 'owner' })
  ),
  renameProp('data', 'repos'),
)
