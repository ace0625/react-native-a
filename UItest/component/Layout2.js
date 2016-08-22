import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import User from './user';
import NavBar from './navBar';
import ButtonGroup from './buttonGroup';
import Taps from './taps';

export default class Layout2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <User />
        <View style={{ height: 40 }}>
        </View>
        <ButtonGroup />
        <View style={{ flex: 1 }}>
        </View>
        <Taps />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  navBar: {
    height: 50,
    backgroundColor: '#FF6E40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarText: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
  user: {
    height: 200,
    backgroundColor: '#81D4FA',
  },
  buttonGroup: {
    height: 200,
    backgroundColor: '#C5E1A5',
  },
  taps: {
    height: 100,
    backgroundColor: '#FFD54F',
  },
});
