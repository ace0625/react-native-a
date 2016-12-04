import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

export default class AbsoluteView extends Component {
  render() {
    return (
      <View style={styles.container}>
     <View style={{ backgroundColor: '#FFAAAA', flex: 1 }}>
       <View style={{ position: 'absolute', backgroundColor: '#FFFFFF',
          right: 100, bottom: 30, height: 30, width: 30, }}></View>
     </View>
     <View style={{ flexDirection: 'row', flex: 1 }}>
       <View style={{ backgroundColor: '#FFAA00', flex: 1 }}>
         <View style={{ position: 'absolute', backgroundColor: '#FFFFFF',
            right: 100, bottom: 30, height: 30, width: 30, }}></View>
       </View>
       <View style={{ backgroundColor: '#00AAAA', flex: 1 }}></View>
     </View>
     <View style={{ backgroundColor: '#FF00AA', flex: 1 }}></View>
   </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
