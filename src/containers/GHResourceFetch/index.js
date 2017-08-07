import _ from 'lodash';
import GitHub from 'github-api';
import { withHandlers, branch, lifecycle, withState, defaultProps, compose } from 'recompose';

import { componentDidMount } from 'composables';

export default methodCall => compose(
  defaultProps({ start: true, token: 'cd3c4f5f6f320590c8a2fd0fc701edd885dfb200' }),
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
