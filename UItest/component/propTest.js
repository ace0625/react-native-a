import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

class CustomText extends Component {
  render() {
    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class PropTest extends Component {
  componentWillMount() {
    this.setState({
      inputText: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => {
              console.log(text);
              this.props.text = text;
              this.setState({ inputText: text });
            }
          }
            value={this.state.inputText}
            />
        <CustomText text={this.state.inputText}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
