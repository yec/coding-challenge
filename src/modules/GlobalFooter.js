import React from 'react';

import Footer from '../components/Footer';
import Container from '../components/Container';
import Content from '../components/Content';
import Text from '../components/Text';
import Level from '../components/Level';

import FooterLinks from './FooterLinks';
import Social from './Social';
import Store from './Store';

export default function GlobalFooter() {
  return <Footer>
    <Container mobilePadding>
      <Content>
        <FooterLinks />
        <Text grey small>Copyright (c) 2019 DEMO Streaming All Rights Reserved.</Text>
        <Level padded>
          <Social />
          <Store />
        </Level>
      </Content>
    </Container>
  </Footer>
}


