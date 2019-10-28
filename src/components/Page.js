import React from 'react';

import 'react-router';
import Section from './Section';
import Container from './Container';
import SubHeader from './SubHeader';
import Main from './Main';

function Page({ title = "", children = null }) {
  return (
    <Main>
      <SubHeader>
        <Container mobilePadding>
          {title}
        </Container>
      </SubHeader>
      <Section>
        <Container mobilePadding medium>
          {children}
        </Container>
      </Section>
    </Main>
  );
}

export default Page;
