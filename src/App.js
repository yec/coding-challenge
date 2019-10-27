import React from 'react';
import logo from './logo.svg';

import 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tile from './components/Tile';
import Section from './components/Section';
import Container from './components/Container';
import SubHeader from './components/SubHeader';
import Main from './components/Main';

import './App.css';

function App() {
  return (
    <Main>
      <SubHeader>
        <Container >
          Popular titles
        </Container>
      </SubHeader>
      <Section>
        <Container medium>
          {[{
            titleCompact: "Series",
            title: "Popular Series",
            url: "popular-series",
          }, {
            titleCompact: "Movies",
            title: "Popular Movies",
            url: "popular-movies",
          }].map(({ titleCompact, title, url }) => <Tile url={url} key={title}>{titleCompact} {title}</Tile>)}
        </Container>
      </Section>
    </Main>
  );
}

export default App;
