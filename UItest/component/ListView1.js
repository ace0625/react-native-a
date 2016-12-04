import React, { Component } from 'react';
import {
  View,
  ListView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

import Row from './Row';

class ListView1 extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(['row 1', 'row 2', 'row 2', 'row 2', 'row 2']),
    };
  }

  render() {
    return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <View style={styles.fow}>
            <Image style={styles.photo}
              source={require('../img/1.jpg')} />
            <Text>{data}</Text></View>}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginLeft: 20,
  },
  row: {
    flex: 1,
    fontSize: 12,
    padding: 30,
    borderWidth: 1,
    borderColor: 'grey',
  },
});

module.exports = ListView1;
