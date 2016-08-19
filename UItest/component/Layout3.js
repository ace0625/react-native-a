import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default class Layout3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <User />
        <View style={{ height: 40 }}>
        </View>
        <ButtonGroup />
        <View style={{ flex: 1 }}>
        </View>
        <Taps />
      </View>
    );
  }
}

export default class NavBar extends Component {
  render() {
    return (
    <View style={styles.navBar}>
      <Text style={styles.navBarText}>
        More
      </Text>
    </View>
  );
  }
}

export default class User extends Component {
  render() {
    return (
    <View style={styles.user}>
      <View style={{ height: 150, flexDirection: 'row', borderWidth: 1, alignItems: 'center' }}>
        <View style={{ width: 100 }}>
           <View style={{ width: 100, height: 100 }} >

           </View>
        </View>
         <View style={{ flex: 1 }}>
           <Text>Nickname: </Text>
           <Text>Name / ID: </Text>
           <Text>School: </Text>
         </View>
      </View>
      <View style={{ height: 50, flexDirection: 'row', borderWidth: 1 }}>
        <View style={{ flex: 1, height: 50, flexDirection: 'row', borderWidth: 1,
          alignItems: 'center', justifyContent: 'center', }}>
          <View style={{ width: 30, height: 30, backgroundColor: 'gray' }}>
          </View>
          <Text>My post</Text>
        </View>
        <View style={{ flex: 1, height: 50, flexDirection: 'row', borderWidth: 1,
          alignItems: 'center', justifyContent: 'center', }}>
          <View style={{ width: 30, height: 30, backgroundColor: 'gray' }}>
          </View>
          <Text>My post</Text>
        </View>
        <View style={{ flex: 1, height: 50, flexDirection: 'row', borderWidth: 1,
          alignItems: 'center', justifyContent: 'center', }}>
          <View style={{ width: 30, height: 30, backgroundColor: 'gray' }}>
          </View>
          <Text>My post</Text>
        </View>
      </View>
    </View>
  );
  }
}

export default class ButtonGroup extends Component {
  render() {
    return (
    <View style={styles.buttonGroup}>

    </View>
  );
  }
}
export default class Taps extends Component {
  render() {
    return (
    <View style={styles.taps}>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  navBar: {
    height: 50,
    backgroundColor: '#FF6E40',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarText: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
  },
  user: {
    height: 200,
    backgroundColor: '#81D4FA',
  },
  buttonGroup: {
    height: 200,
    backgroundColor: '#C5E1A5',
  },
  taps: {
    height: 100,
    backgroundColor: '#FFD54F',
  },
});
