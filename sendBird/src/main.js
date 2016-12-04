import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
} from 'react-native';
import Login from './components/login';

const ROUTES = {
  login: Login,
};

class Main extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    let Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        style={ styles.container }
        initialRoute={ { name: 'login' }}
        renderScene={this.renderScene}
        configureScene={ () =>
          { Navigator.SceneConfigs.FloatFromRight; }}

      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

module.exports = Main;
