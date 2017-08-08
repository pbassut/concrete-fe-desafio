import GitHub from 'github-api';
import { withHandlers, withProps, lifecycle, withState, defaultProps, compose } from 'recompose';

import { componentDidMount } from 'composables';

export default methodCall => compose(
  defaultProps({
    token: '5aef8386410f61efcc67811e83786b1c5a917690', // No, this token is not valid. That would be foolish
  }),
  withProps(({ token }) => ({
    gh: new GitHub({ token }),
  })),
  withState('data', 'setData', []),
  withHandlers({
    request: ({ setData, ...props }) => () => (
        methodCall(props)
          .then(({ data }) => setData(data))
          .catch(() => setData([]))
    )
  }),
  componentDidMount(({ request }) => request())
)
