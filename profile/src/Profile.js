import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    TouchableHighlight,
    Text,
    Image,
} from 'react-native';
import LoadingSpinner from './LoadingSpinner';

class Profile extends Component {
  componentWillMount() {
    <LoadingSpinner />;
  }

  render() {
    return (
        <ScrollView contentContainerStyle={styles.scroll}>
          <Image style={styles.profileImage}
                source={require('./cute.jpg')} />
          <View style={styles.profileUserInfo}>
            <Text>Name</Text>
            <Text>Google | Software engineer</Text>
            <Text>Havard University | Computer Science</Text>
            <Text>San Francisco CA, USA</Text>
          </View>
          <View style={styles.profileUserExperice}>
            <Text>Experience</Text>
            <Text>Google</Text>
          </View>
          <TouchableHighlight>
            <Text style={styles.connectButton}>Connect</Text>
          </TouchableHighlight>
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  scroll: {
    flex: 1,
    paddingVertical: 20,
  },
  profileImage: {
    position: 'absolute',
    alignItems: 'center',
    zIndex: 100,
    height: 100,
    width: 100,
    marginLeft: 120,
    borderRadius: 50,
  },
  profileUserInfo: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    backgroundColor: '#f7f7f9',
  },
  profileUserExperice: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f7f7f9',
  },
  connectButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F33522',
  },
});

module.exports = Profile;
