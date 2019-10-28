import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Button from './components/Button';
import Page from './components/Page';
import Tile from './components/Tile';
import Text from './components/Text';
import Level from './components/Level';

import App from './App';
import TileView from "./modules/TileView";
import GlobalFooter from "./modules/GlobalFooter";
import GlobalHeader from "./modules/GlobalHeader";

function programTypeSelector(thisProgramType) {
  return ({ entries }) => {
    return entries.filter(({ programType }) => { return programType == thisProgramType; });
  };
}

const seriesSelector = programTypeSelector('series');
const moviesSelector = programTypeSelector('movie');

export default function Front() {
  return (
    <Router>
      <GlobalHeader />
      <Switch>
        <Route path="/popular-series">
          <Page title="Popular Series">
            <TileView source="feed/sample.json" selector={seriesSelector} />
          </Page>
        </Route>
        <Route path="/popular-movies">
          <Page title="Popular Movies">
            <TileView source="feed/sample.json" selector={moviesSelector} />
          </Page>
        </Route>
        <Route exact path="/">
          <Page title="Popular Titles">
            <TileView items={[{
              titleCompact: "Series",
              title: "Popular Series",
              url: "popular-series",
            }, {
              titleCompact: "Movies",
              title: "Popular Movies",
              url: "popular-movies",
            }]} />
          </Page>
        </Route>
        <Route component={props => (
          <Page title={`Page not found ${props.location.pathname}`}>
            <TileView items={[{
              titleCompact: "Series",
              title: "Popular Series",
              url: "popular-series",
            }, {
              titleCompact: "Movies",
              title: "Popular Movies",
              url: "popular-movies",
            }]} />
          </Page>
        )}>
        </Route>
      </Switch>
      <GlobalFooter />
    </Router>
  );
}
