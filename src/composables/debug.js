import { getDisplayName, withProps } from 'recompose'

export default Component => (
    withProps(props => {
        console.log(getDisplayName(Component) + ': ', props);
    })(Component)
)
