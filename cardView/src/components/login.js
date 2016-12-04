import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

const CARD_PREVIEW_WIDTH = 30;
const CARD_MARGIN = 10;
const CARD_WIDTH = Dimensions.get('window').width - (CARD_MARGIN + CARD_PREVIEW_WIDTH) * 2;
const CARD_HEIGHT = Dimensions.get('window').height - 200;

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        automaticallyAdjustInsets={false}
        horizontal={true}
        decelerationRate={0}
        snapToInterval={CARD_WIDTH + CARD_MARGIN * 2}
        snapToAlignment="start"
        contentContainerStyle={styles.content}
      >
      <View style={styles.card}>
        <Text>Card 1</Text>
      </View>
      <View style={styles.card}>
        <Text>Card 2</Text>
      </View>
      <View style={styles.card}>
        <Text>Card 3</Text>
      </View>
      <View style={styles.card}>
        <Text>Card 4</Text>
      </View>
    </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    paddingHorizontal: CARD_PREVIEW_WIDTH,
    alignItems: 'center',
    flex: 1,
  },
  card: {
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

module.exports = Login;
