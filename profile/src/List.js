import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Navigator,
    TouchableOpacity,
    Text,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

class List extends Component {
  render() {
    return (
      <View style={{ margin: 100 }}>
        <Text onPress={Actions.loadingSpinner}>Show Profile page</Text>
      </View>
    );
  }
}

module.exports = List;

