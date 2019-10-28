import styled from 'styled-components';

const Header = styled.div`
  background: linear-gradient( rgb(62, 136, 254), rgb(55, 81,248));
  color: white;

  height: 60px;
  display:flex;
  align-items: center;

  font-size: 33px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0,0,0, 0.3);

  @media (min-width: 769px) {
    // padding-left: 10px;
    // padding-right: 10px;
  }
`;

export default Header;
