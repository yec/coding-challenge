import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import { createLogOut, createLogIn } from "../actions/authenticationActions";

import Header from '../components/Header';
import Container from '../components/Container';
import Text from '../components/Text';
import Level from '../components/Level';
import Button from '../components/Button';

function LoggedIn() {
  const dispatch = useDispatch();
  return <React.Fragment>
    <Button transparent onClick={() => dispatch(createLogOut())}>Log out</Button>
  </React.Fragment>
}

function LoggedOut() {
  const dispatch = useDispatch();
  return <React.Fragment>
    <Button transparent onClick={() => dispatch(createLogIn())}>Log in</Button>
    <Button secondary onClick={() => alert('not implemented')}>Start your free trial</Button>
  </React.Fragment>
}

export default function GlobalHeader() {

  const { loggedIn } = useSelector(state => ({
    loggedIn: state.authentication.loggedIn,
  }));

  return <Header>
    <Container mobilePadding>
      <Level mobile>
        <Link style={{
          display: 'flex',
          alignItems: 'center'
        }} to="/">DEMO Streaming</Link>
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          {loggedIn ? <LoggedIn /> : <LoggedOut />}
        </div>
      </Level>
    </Container>
  </Header>
}
