import styled from 'styled-components';

const Button = styled.button`
  color: white;
  // font-weight: bold;
  font-size: 16px
  border: none;

  padding-right: 15px;
  padding-left: 15px;



  height: 34px;

  ${props => props.transparent && `
    background: transparent;
  `}

  ${props => props.secondary && `
    background: linear-gradient(#555555, #333333, #555555);
    text-shadow: 1px 1px 2px #333333;
  `}
`;

export default Button;
