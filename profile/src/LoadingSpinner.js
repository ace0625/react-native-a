import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  Actions,
} from 'react-native-router-flux';

class LoadingSpinner extends Component {

  constructor(props) {
    super();
    this.state = {
      visible: false,
    };
  }

  componentWillMount () {
    setTimeout(() => {
        this.setState({
          visible: !this.state.visible,
        });
      }, 3000);
  }
  /* eslint react/no-did-mount-set-state: 0 */
  componentDidMount() {
    this.setState({
        visible: !this.state.visible,
      });
    Actions.profile();
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner visible={this.state.visible} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});

module.exports = LoadingSpinner;
