import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

function Tiles ({ className, children}) {
  return <div className={className}>{children}</div>
}

const TilesStyled = styled(Tiles)`
display: flex;
flex-flow: row wrap;

margin-left: -5px;
margin-top: -5px;
margin-right: -5px;
@media (min-width: 769px) {
  margin-left: -10px;
  margin-top: -10px;
  margin-right: -10px;
}
`;

export default TilesStyled;
