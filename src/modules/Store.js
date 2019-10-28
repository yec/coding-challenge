import React from 'react';
import styled from 'styled-components';

const SocialContainer = styled.div`
@media (min-width: 769px) {
  display: flex;
  flex-direction: row;
}
`;

const SocialImg = styled.img`
  margin-right: 20px;
`;

export default function Social () {

  const socials = [
    'assets/store/app-store.svg',
    'assets/store/play-store.svg',
    'assets/store/windows-store.svg',
  ]
  return <SocialContainer>{socials.map(src => <SocialImg key={src} height="36px" src={src} />)}</SocialContainer>;
}
