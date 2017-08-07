import _ from 'lodash';
import GitHub from 'github-api';
import { withHandlers, branch, lifecycle, withProps, withState, defaultProps, compose } from 'recompose';

import { componentDidMount } from 'composables';


export default methodCall => compose(
  defaultProps({ start: true, token: '6161008b690c758f357327ad95309f84db53b39e' }),
  withState('data', 'setData', []),
  withHandlers({
    request: ({ setData, token, ...props }) => () => {
        const gh = new GitHub({ token });
        methodCall(gh, props)
          .then(({ data }) => setData(data))
          .catch(() => setData([]));
    }
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if(this.props.q !== nextProps.q){
        this.props.request();
      }
    }
  }),
  branch(
    _.property('start'),
    componentDidMount(({ request }) =>
      request()
    ),
  )
)
