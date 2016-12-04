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

class CardView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        directionalLockEnabled={true}
        automaticallyAdjustContentInsets={true}
        onScroll={() => { console.log('onScroll!'); }
      }
        scrollEventThrottle={200}
        horizontal={true}
        vertical={false}
        pagingEnabled={true}
        style={styles.container}>
        {PAGES.map(createPage)}
      </ScrollView>
    );
  }
}

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows('1'),
    });
  }

  render() {
    return (
      <ListView
         dataSource={this.state.dataSource}
         renderRow={ rowData => <View style={styles.rowView} />
     }
     style={styles.content}
   />
    );
  }
}

const PAGES = ['1', '2', '3', '4', '5', '6', '7'];
let createPage = () => <Page />;
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

module.exports = CardView;
