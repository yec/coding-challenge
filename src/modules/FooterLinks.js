import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Text from '../components/Text';

const StyledLink = styled(Link)`
  display: block;
  padding-left: 10px;
  padding-right: 10px;
  border-right: 1px solid #777777;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
    border-right: none;
  }
`;

const FooterLinkContainer = styled.div`
margin-bottom: 16px;
@media (min-width: 769px) {
  display: flex;
  flex-direction: row;
}
`;

export default function FooterLink() {

  const links = [{
    text: "Home",
    url: "./",
  },
  {
    text: "Terms & Conditions",
    url: "./terms-and-conditions",
  },
  {
    text: "Privacy Policy",
    url: "./privacy",
  },
  {
    text: "Collection Statement",
    url: "./collection-statement",
  },
  {
    text: "Help",
    url: "./help",
  },
  {
    text: "Manage Account",
    url: "./manage-account",
  },
  ]

  return <FooterLinkContainer>{links.map(({ text, url }) => <StyledLink key={text} to={url}><Text lightgrey xsmall>{text}</Text></StyledLink>)}</FooterLinkContainer>;
}
