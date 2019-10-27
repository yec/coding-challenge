import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  background: linear-gradient( rgb(62, 136, 254), rgb(55, 81,248));
  color: white;

  // padding-left: 10px;
  // padding-right: 10px;

  padding-top: 10px;
  padding-bottom: 10px;

  // justifyContent: center;
  // height: 60px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0, 0.3);

  @media (min-width: 769px) {
    // padding-left: 10px;
    // padding-right: 10px;
  }
`;

export default Header;
