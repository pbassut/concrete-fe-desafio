import React from 'react';
import { branch, lifecycle, compose, withState, withHandlers, withProps } from 'recompose';
import { Link } from 'react-router-dom';
import { isEmpty, debounce } from 'lodash';

import { GHSearchUsers } from 'containers';
import { Loading } from 'components';

import { Container, SearchInput, SearchForm, List, ListItem } from './styles.js';

const Home = ({ onChange, users, isLoading }) => (
  <Container>
    <SearchForm>
      <h1>Search</h1>
      <SearchInput type="text" onChange={e => onChange(e.target.value) }/>
      { isLoading && <Loading xsmall />}

      <List>{ users }</List>
    </SearchForm>
  </Container>
)

export default compose(
  withState('q', 'search', ''),
  withState('isLoading', 'showLoading', false),
  withHandlers({
    onChange: ({ search }) => debounce(search, 500)
  }),
  GHSearchUsers,
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if(this.props.q !== nextProps.q){
        this.props.showLoading(true);

        this.props.request().then(() => 
          this.props.showLoading(false)
        );
      }
    }
  }),
  branch(
    props => !isEmpty(props.results),
    withProps(({ results }) => ({
      users: results.map(({ id, login })=> 
        <ListItem key={id}>
          <Link to={`/users/${login}`}>{login}</Link>
        </ListItem>
      )
    })),
  ),
)(Home);
