import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;

    flex-grow: 1
    margin: 0 auto
    position: relative
    width: auto

    @media (min-width: 769px) {

      max-width: 924px;

      ${props => props.medium && `
        margin-top: 40px;
        margin-bottom: 40px;
      `}
    }
`;

export default Container;
