// Import 
// var React = require('react-native');
// var AppRegistry = React.AppRegistry;
// var Text = React.Text;
// var View = React.View;

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View, 
  StyleSheet
} from 'react-native';

// Component
class Weekdays extends Component {
  render() {
    return (
     <View style={styles.container}>
      <Text style={{fontSize: 18}}> 
        Days of the week:
      </Text>
    </View>
      );
  }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
   }
});


// Show the react compent on the screen
AppRegistry.registerComponent('weekdays', () => Weekdays);
// AppRegistry.registerComponent('weekdays', function() {
//   return Weekdays
// });

 