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
    'assets/social/facebook-white.svg',
    'assets/social/twitter-white.svg',
    'assets/social/instagram-white.svg',
  ]
  return <SocialContainer>{socials.map(src => <SocialImg key={src} width="30px" height="30px" src={src} />)}</SocialContainer>;
}
