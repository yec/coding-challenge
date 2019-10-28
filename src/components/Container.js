import styled from 'styled-components';

const Container = styled.div`
    display: flex;

    flex-grow: 1
    margin: 0 auto
    position: relative
    width: auto

    @media (min-width: 769px) {
      max-width: 904px;
    }

    ${props => props.mobilePadding && `
    padding-left: 5px;
    padding-right: 5px;
    @media (min-width: 769px) {
      padding-left: 0px;
      padding-right: 0px;
    }
    `}

    ${props => props.medium && `
      margin-top: 20px;
      margin-bottom: 20px;

    @media (min-width: 769px) {
      margin-top: 40px;
      margin-bottom: 40px;
    }
  `}
`;

export default Container;
