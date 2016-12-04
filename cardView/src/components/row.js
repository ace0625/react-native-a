import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from 'react-native';

class Row extends Component {

  constructor(props) {
    super(props);
    console.log('row');
    this.state = {
      profileImage: '',
      job: '1',
      education: '1',
    };
  }

  componentDidMount() {
    this.setState({
      name: 'name',
      job: 'job',
      education: 'edu',
    });
  }

  render() {
    return (
        <View style={styles.rowView}>
          <Text style={styles.name}>{this.state.name}</Text>
          <Text style={styles.job}>{this.state.job}</Text>
          <Text style={styles.education}>{this.state.education}</Text>
        </View>
    );
  }
}

const CARD_PREVIEW_WIDTH = 10;
const CARD_MARGIN = 25;
const CARD_WIDTH = Dimensions.get('window').width - (CARD_MARGIN + CARD_PREVIEW_WIDTH) * 2;
const CARD_HEIGHT = Dimensions.get('window').height - 200;
const HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    paddingHorizontal: 10,
    paddingVertical: HEIGHT / 10,
    flex: 1,
  },
  rowView: {
    flex: 1,
    backgroundColor: '#fff',
    width: CARD_WIDTH,
    margin: CARD_MARGIN,
    height: CARD_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0.3,
    },
  },
});

module.exports = Row;
