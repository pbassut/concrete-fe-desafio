import { mapProps } from 'recompose';
import { pick } from 'lodash'

export default propsNames => mapProps(props => pick(props, propsNames))
