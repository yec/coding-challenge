import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Container from '../components/Container';
import Text from '../components/Text';
import Level from '../components/Level';
import Button from '../components/Button';

export default function GlobalHeader() {
  return <Header>
    <Container>
      <Level mobile>
      <Link to="/">DEMO Streaming</Link>
      <div style={{display: 'flex'}}>
      <Button transparent>Log in</Button>
      <Button secondary>Start your free trial</Button>
      </div>
      </Level>
    </Container>
  </Header>
}
