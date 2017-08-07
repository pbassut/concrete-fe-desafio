import GitHub from 'github-api';
import { lifecycle, withProps, withState, defaultProps, compose } from 'recompose';


export default methodCall => compose(
  defaultProps({ token: '6161008b690c758f357327ad95309f84db53b39e' }),
  withState('data', 'setData', []),
  lifecycle({
    componentWillReceiveProps({ setData, token, ...props }) {
      if(this.props.q !== props.q){
        const gh = new GitHub({ token });
        methodCall(gh, props)
          .then(response => setData(response.data))
          .catch(() => setData([]));
      }
    }
  }),
)
