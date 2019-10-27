import React, { useState, useEffect } from 'react';

import 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tile from './Tile';
import Section from './Section';
import Container from './Container';
import Header from './Header';
import SubHeader from './SubHeader';
import Footer from './Footer';
import Main from './Main';
import Button from './Button';

function Page({ title = "", children = null }) {
  return (
    <Main>
      <SubHeader>
        <Container >
          {title}
        </Container>
      </SubHeader>
      <Section>
        <Container medium>
          {children}
        </Container>
      </Section>
    </Main>
  );
}

export default Page;
