import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';

import {
  Router,
  Scene
} from 'react-native-router-flux';

import { Home, Chat } from './components';

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" />
          <Scene key="chat" component={Chat} title="Chat" />
        </Scene>
      </Router>
    );
  }

}
