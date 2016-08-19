import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class Layout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navibar />
        <Body />
      </View>
    );
  }
}

class Navibar extends Component {
  render() {
    return (
      <View style={styles.naviBar}>
        <Text style={styles.naviText}>
          Navibar
        </Text>
      </View>
    );
  }
}

class Body extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.left}>
        </View>
        <View style={styles.right}>
          <View style={styles.rightTop}>
          </View>
          <View style={styles.rightBottom}>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  naviBar: {
    height: 50,
    backgroundColor: '#B0B0B0',
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    backgroundColor: 'red',
  },
  right: {
    flex: 2,
    flexDirection: 'column',
  },
  rightTop: {
    flex: 1,
    backgroundColor: 'blue',
  },
  rightBottom: {
    flex: 2,
    backgroundColor: 'yellow',
  },
  naviText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
  },
});
