import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

/*
  this is pager two
*/
export default class PagerTwo extends Component {
  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text>This is PagerTwo!</Text>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}
