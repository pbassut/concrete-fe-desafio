import React from 'react';
import styled from 'styled-components';

import './styles.css';

const TheCube = styled.div.attrs({
  className: 'cssload-thecube'
})`
  width: ${props => props.xsmall ? 25 : 73}px;
  height: ${props => props.xsmall ? 25 : 73}px;
	margin: 0 auto;
	margin-top: 49px;
	position: relative;
	transform: rotateZ(45deg);
		-o-transform: rotateZ(45deg);
		-ms-transform: rotateZ(45deg);
		-webkit-transform: rotateZ(45deg);
		-moz-transform: rotateZ(45deg);
`

export default props => (
  <TheCube {...props}>
    <div className="cssload-cube cssload-c1"></div>
    <div className="cssload-cube cssload-c2"></div>
    <div className="cssload-cube cssload-c4"></div>
    <div className="cssload-cube cssload-c3"></div>
  </TheCube>
)
