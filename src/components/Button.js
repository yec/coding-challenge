import styled from 'styled-components';

const Button = styled.button`
  color: white;
  border: none;

  font-size: 12px

  padding-right: 5px;
  padding-left: 5px;

  height: 34px;

  ${props => props.transparent && `
    background: transparent;
  `}

  ${props => props.secondary && `
    background: linear-gradient(#555555, #333333, #555555);
    text-shadow: 1px 1px 2px #333333;
  `}
  @media (min-width: 769px) {

    font-size: 16px

    padding-right: 15px;
    padding-left: 15px;

    height: 34px;
  }
`;

export default Button;
