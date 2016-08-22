import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default class NavBar extends Component {
  render() {
    return (
    <View style={styles.navBar}>
      <Text style={styles.navBarText}>
        More
      </Text>
    </View>
  );
  }
}

const styles = StyleSheet.create({
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
});
