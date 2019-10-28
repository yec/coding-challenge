import styled from 'styled-components';

const Text = styled.div`
  display: flex;
  flex: 1;

  ${props => props.grey && `
    color: rgb(120,120,120);
  `}
  ${props => props.lightgrey && `
    color: rgb(180,180,180);
  `}

  ${props => props.xsmall && `
    font-size: 12px;
  `}

  ${props => props.small && `
    font-size: 14px;
  `}

  ${props => props.cardTitle && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 4px;
    font-size: 14px;
  `}

  ${props => props.large && `
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;

    @media (min-width: 769px) {
      font-size: 24px;
    }
  `}

  ${props => props.centered && `
    justify-content: center;
    align-items: center;
  `}

  ${props => props.white && `
    color: white;
  `}
`;

export default Text;
