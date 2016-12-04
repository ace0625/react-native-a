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
import CardScroll from './react-native-card-scroll';
import Row from './row';

class CustomCard extends Component {
  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: dataSource.cloneWithRows([
       { image: require('./images/1.png'), key: 'text1' },
       { image: require('./images/2.png'), key: 'text1' },
       { image: require('./images/3.png'), key: 'text1' },
       { image: require('./images/4.png'), key: 'text1' },
       { image: require('./images/5.png'), key: 'text1' },
    ]),
    };
  }

  renderRow(rowData) {
    return <Row dataSource={rowData}/>;
  }

  render() {
    return (
        <CardScroll
           dataSource={this.state.dataSource}
           renderRow={this.renderRow}
       />
    );
  }
}

const CARD_PREVIEW_WIDTH = 10;
const CARD_MARGIN = 25;
const CARD_WIDTH = Dimensions.get('window').width - (CARD_MARGIN + CARD_PREVIEW_WIDTH) * 2;
const CARD_HEIGHT = Dimensions.get('window').height - 200;
const HEIGHT = Dimensions.get('window').height;

const slideWidth = 250;
const horizontalMargin = 40;
const itemWidth = slideWidth + horizontalMargin * 2;

const styles = StyleSheet.create({
  slide: {
    width: itemWidth,
  },
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
    backgroundColor: '#ffffff',
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

module.exports = CustomCard;
