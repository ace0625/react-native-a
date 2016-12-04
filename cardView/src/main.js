import React, { Component } from 'react';
import {
  Navigator,
  StyleSheet,
} from 'react-native';
import Login from './components/login';
import CardView from './components/cardView';
import CardView2 from './components/cardView2';
import BTab from './components/bottomTab/bTab';
import CustomCard from './components/customCard';
import Dropdown from './components/dropdown';

const ROUTES = {
  login: Login,
  cardview: CardView,
  cardview2: CardView2,
  customcard: CustomCard,
  btab: BTab,
  dropdown: Dropdown,
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
        initialRoute={ { name: 'dropdown' }}
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
