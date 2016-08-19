/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

// import ButtonEx from './component/ButtonEx';
// import ImgPicker from './component/ImagePicker';
// import UiTest from './component/UiTest';
// import PagerOne from './component/PagerOne'
// import PagerTwo from './component/PagerTwo'
// import Ex from './Example';
// import Layout from './component/Layout';
import Layout2 from './component/Layout2';
// import Layout3 from './component/Layout3';

class UItest extends Component {
  render() {
    return (
      // <UiTest />
      //  <ImgPicker />
      // <ButtonEx />
      // <Ex />
      // <Layout />
      <Layout2 />
      // <Layout2 />
      // {/* <Router>
      //   <Scene key="root">
      //     <Scene key="pagerOne" component={PagerOne} title="PagerOne" initial={true} />
      //     <Scene key="pagerTwo" component={PagerTwo}  title="PagerTwo" />
      //   </Scene>
      // </Router> */}
    );
  }
}

AppRegistry.registerComponent('UItest', () => UItest);
