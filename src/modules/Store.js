import React from 'react';
import styled from 'styled-components';

const SocialContainer = styled.div`
display: flex;
justify-content: space-around;
flex-flow: row wrap;

@media (min-width: 769px) {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
`;

const SocialImg = styled.img`
margin-bottom: 10px;
@media (min-width: 769px) {
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
}
`;

export default function Social () {

  const socials = [
    'assets/store/app-store.svg',
    'assets/store/play-store.svg',
    'assets/store/windows-store.svg',
  ]
  return <SocialContainer>{socials.map(src => <SocialImg key={src} height="36px" src={src} />)}</SocialContainer>;
}
