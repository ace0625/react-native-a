import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class TabButton extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: 30, width: 30, backgroundColor: 'gray' }}>
        </View>
        <Text style={{ marginTop: 5, color: '#A0A0A0' }}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}
export default class Taps extends Component {
  render() {
    return (
    <View style={styles.taps}>
      <TabButton name="1" />
      <TabButton name="2" />
      <TabButton name="3" />
      <TabButton name="4" />
      <TabButton name="5" />
    </View>
  );
  }
}

const styles = StyleSheet.create({
  taps: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: '#A0A0A0',
  },
});
