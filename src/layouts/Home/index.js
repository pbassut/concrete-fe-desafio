import React from 'react';
import { defaultProps, compose, withState, withHandlers, withProps } from 'recompose';
import { Link } from 'react-router-dom';
import { debounce } from 'lodash';

import { GHSearchUsers } from 'containers';

import { Container, SearchInput, SearchForm, List, ListItem } from './styles.js';

const Home = ({ onChange, users }) => (
  <Container>
    <SearchForm>
      <h1>Search</h1>
      <SearchInput type="text" onChange={e => onChange(e.target.value) }/>
      <List>{ users }</List>
    </SearchForm>
  </Container>
)

export default compose(
  defaultProps({ start: false }),
  withState('q', 'search', ''),
  withHandlers({
    onChange: ({ search }) => debounce(search, 500)
  }),
  GHSearchUsers,
  withProps(({ results }) => ({
    users: results.map(({ id, login })=> 
      <ListItem key={id}>
        <Link to={`/users/${login}`}>{login}</Link>
      </ListItem>
    )
  })),
)(Home);
