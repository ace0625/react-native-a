import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  Image,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Carousel from 'react-native-carousel-control';

class CardView2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel pageStyle={ { backgroundColor: '#fff',
        width: CARD_WIDTH,
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
        }, } }>
          <Text style={{ alignItems: 'center' }}>Hello</Text>
          <Text>World!</Text>
          <Text>From carousel</Text>
          <Text>From carousel</Text>
          <Text>From carousel</Text>
          <Text>From carousel</Text>
          <Text>From carousel</Text>
          <Text>From carousel</Text>
          <Text>From carousel</Text>
          <Text>From carousel</Text>
      </Carousel>
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

module.exports = CardView2;
