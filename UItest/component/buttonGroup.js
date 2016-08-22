import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

class Button extends Component {
  render() {
    return (
      <View style={{ flex: 1, height: 100, borderWidth: 0.5,
          justifyContent: 'center', alignItems: 'center', }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'gray' }} />
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}
export default class ButtonGroup extends Component {
  render() {
    return (
      <View style={styles.buttonGroup}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button name="1"/>
            <Button name="2"/>
            <Button name="3"/>
            <Button name="4"/>
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Button name="5"/>
            <Button name="6"/>
            <Button name="7"/>
            <Button name="8"/>
          </View>
        </View>
  );
  }
}

const styles = StyleSheet.create({
  buttonGroup: {
    height: 200,
    backgroundColor: '#C5E1A5',
  },
});
