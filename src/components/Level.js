import styled from 'styled-components';

const Level = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex: 1;
    justify-content: space-between;
  }

  ${props => props.mobile && `
  display: flex;
  flex: 1;
  justify-content: space-between;
  `}

  ${props => props.padded && `
  margin-top: 40px;
  margin-bottom: 40px;
  `}
`;

export default Level;
