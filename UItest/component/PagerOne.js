import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PagerOne extends Component {
  render() {
    const goToPageTwo = () =>
    Actions.pagerTwo({ text: 'Hello World!' });
    return (
       <View style={{ margin: 128 }}>
         <Text onPress={goToPageTwo}>
           This is PagerOne!
         </Text>
       </View>
     );
  }
}



// const goToPageTwo = () => Actions.PagerTwo({text: 'Hello World!'});
//  return (
//    <View style={{margin: 128}}>
//      <Text onPress={goToPageTwo}>
//        This is PagerOne!
//      </Text>
//    </View>
