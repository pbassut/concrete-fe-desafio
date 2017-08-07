import { mapProps } from 'recompose';

export default (dest, src) => (
    mapProps(props => {
        const newProps = { ...props };
        newProps[dest] = {
            ...props[dest],
            ...props[src],
        }
        return newProps;
    })
)
