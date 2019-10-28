import React from "react";
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import configureStore from './store/configureStore';

import Page from './components/Page';

import TileView from "./modules/TileView";
import GlobalFooter from "./modules/GlobalFooter";
import GlobalHeader from "./modules/GlobalHeader";

import { programTypeSelector } from './utils/selectors';

import './App.css';


const seriesSelector = programTypeSelector('series');
const moviesSelector = programTypeSelector('movie');

const store = configureStore();

export default function Front() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
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
        </div>
      </Router>
    </Provider>
  );
}
