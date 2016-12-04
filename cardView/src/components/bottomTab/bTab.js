import React, { Component }from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import TabBar from './tabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class BTab extends Component {
  render() {
    return (
        <ScrollableTabView
          style={{ marginTop: 20 }}
          initialPage={0}
          tabBarPosition='bottom'
          renderTabBar={() => <TabBar />}
          >
        <ScrollView tabLabel="ios-home" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Home</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="md-shuffle" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Tournament</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="ios-people" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Activity</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="ios-chatbubbles" style={styles.tabView}>
          <View style={styles.card}>
            <Text>Messenger</Text>
          </View>
        </ScrollView>
        <ScrollView tabLabel="md-contact" style={styles.tabView}>
          <View style={styles.card}>
            <Text>My Profile</Text>
          </View>
        </ScrollView>
      </ScrollableTabView>
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 150,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});

module.exports = BTab;
