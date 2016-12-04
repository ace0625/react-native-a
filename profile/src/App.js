import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import {
  Router,
  Scene,
} from 'react-native-router-flux';

import List from './List';
import Profile from './Profile';
import LoadingSpinner from './LoadingSpinner';
import ListviewSection from './ListviewSection';

class App extends Component {
  render() {
    return (
      <ListviewSection />
      // <Router>
      //   <Scene key="root">
      //     <Scene key="list" component={List} title="List" initial={true} />
      //     <Scene key="profile" component={Profile} title="User Profile" />
      //     <Scene key="loadingSpinner" component={LoadingSpinner} hideNavBar={true} />
      //   </Scene>
      // </Router>
    );
  }
}

module.exports = App;
