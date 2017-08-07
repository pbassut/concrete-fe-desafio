import React from 'react'
import { lifecycle, withHandlers, withState, defaultProps, renderNothing, compose, branch } from 'recompose';

import { debug, componentDidMount } from 'composables'

import axios from 'axios'

export default compose(
    defaultProps({ requestMethod: axios.get }),
    withState('data', 'setData', null),
    componentDidMount(({ requestMethod, url, setData }) => {
        requestMethod(url).then(({ data }) => setData(data))
    }),
)
