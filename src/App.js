import React from 'react';

import {
  StyleSheet,
  Platform
} from 'react-native';

import {
  Router,
  Scene
} from 'react-native-router-flux';

import { Home, Chat } from './components';

const App = () => {
    return (
      <Router>
        <Scene key="root" style={styles.headerBar}>
          <Scene key="home" component={Home} title="Home" />
          <Scene key="chat" component={Chat} title="Chat" />
        </Scene>
      </Router>
    );
}

const styles = StyleSheet.create({
  headerBar: {
    paddingTop: Platform.OS === 'ios' ? 64 : 54
  }
});

export default App;
