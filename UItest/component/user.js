import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

export default class User extends Component {
  render() {
    return (
    <View style={styles.user}>
      <View style={{ height: 150, flexDirection: 'row', borderWidth: 1, alignItems: 'center' }}>
        <View style={{ width: 100 }}>
           <View style={{ width: 100, height: 100 }} >
              <Image source={require('../img/avatar.png')}
                style={{ width: 100, height: 100 }} />
           </View>
        </View>
         <View style={{ flex: 1, marginLeft: 10 }}>
           <Text>Nickname: </Text>
           <Text>Name / ID: </Text>
           <Text>School: </Text>
         </View>
      </View>
      <View style={{ height: 50, flexDirection: 'row', borderWidth: 1 }}>
        <View style={{ flex: 1, height: 50, flexDirection: 'row', borderWidth: 1,
          alignItems: 'center', justifyContent: 'center', }}>
           <Image source={require('../img/list.png')} style={{ width: 30, height: 25 }}/>
          <Text style={{ marginLeft: 5 }}>My post</Text>
        </View>
        <View style={{ flex: 1, height: 50, flexDirection: 'row', borderWidth: 1,
          alignItems: 'center', justifyContent: 'center', }}>
          <Image source={require('../img/chat.png')} style={{ width: 30, height: 25 }}/>
          <Text style={{ marginLeft: 5 }}>My post</Text>
        </View>
        <View style={{ flex: 1, height: 50, flexDirection: 'row', borderWidth: 1,
          alignItems: 'center', justifyContent: 'center', }}>
          <Image source={require('../img/star.png')} style={{ width: 30, height: 25 }}/>
          <Text style={{ marginLeft: 5 }}>My post</Text>
        </View>
      </View>
    </View>
  );
  }
}
const styles = StyleSheet.create({
  user: {
    height: 200,
    backgroundColor: 'white',
  },
});
