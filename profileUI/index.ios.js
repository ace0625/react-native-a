/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux'

// import ButtonEx from './component/ButtonEx';
 // import ImgPicker from './component/ImagePicker';
// import UiTest from './component/UiTest';
import PagerOne from './component/PagerOne'
import PagerTwo from './component/PagerTwo'

class profileUI extends Component {
  render() {
    return (
      // <UiTest />
    //  <ImgPicker />
      // <ButtonEx />
      <Router>
        <Scene key="root">
          <Scene key="pagerOne" component={PagerOne} title="PagerOne" initial={true} />
          <Scene key="pagerTwo" component={PagerTwo}  title="PagerTwo" />
        </Scene>
      </Router>
    )
  }
}

AppRegistry.registerComponent('profileUI', () => profileUI);
