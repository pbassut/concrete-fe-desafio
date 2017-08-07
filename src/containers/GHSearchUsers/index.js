import { renameProp, compose } from 'recompose';
import { GHResourceFetch } from 'containers';

export default compose(
  GHResourceFetch(
    (gh, { q }) => gh.search({ q }).forUsers()
  ),
  renameProp('data', 'results'),
)
