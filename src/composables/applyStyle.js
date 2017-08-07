import React from 'react'
import styled from 'styled-components'

export default (string, values) =>
    Component => props => {
        const StyledComponent = styled(Component)(string, values)
        return <StyledComponent { ...props } />
    }
