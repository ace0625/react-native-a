/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//import React, { Component } from 'react';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Platform,
  DeviceEventEmitter,
  TouchableHighlight,
  NativeModules,
  PropTypes
} from 'react-native';

//import StatusBarBackground from './app/StatusBarBackground';
//import styles from './app/style';
import { login, logout, getCredentials, liEvents} from './util';
import Icon from 'react-native-vector-icons/FontAwesome';
const LinkedinLogin = NativeModules.LinkedinLogin;

class linkedInLogin extends Component {

  constructor(props) {
    super(props);
    this.willUnmountSoon = false;
    this.state = {
        credentials: null,
        subscriptions: []
    };
  }
  

  render() {
    const { loginText = "Log in with Linkedin", logoutText = "Log out"} = this.props;
    const text = this.state.credentials ? logoutText : loginText;
    const { LILMButton, LILMButtonContent, LILMIconWrap, LILMIcon, LILMTextWrap, LILMText} = this.prepareStyle();
    return (
       <TouchableHighlight style={ styles.StatusBarBackground } onPress={this.onPress.bind(this)}>
        <View style={LILMButtonContent}>
          <View style={ LILMIconWrap }>
            <Icon name="linkedin" style={ LILMIcon }/>
          </View>
          <View style={ LILMTextWrap }>
            <Text style={ LILMText } numberOfLines={1}>{text}</Text>
          </View>
          <View style={ LILMIconWrap }></View>
        </View>
      </TouchableHighlight> );
  }

   Login(){
    login(this.props.appDetails).then((data) => {
      if (!this.willUnmountSoon) this.setState({ credentials : data });
    }).catch((err) => {
      if (!this.willUnmountSoon) this.setState({ credentials : null });
    })
  }

   Logout(){
    logout().then((data) => {
      if (!this.willUnmountSoon) this.setState({ credentials : null });
    }).catch((err) => {
      console.warn(err);
    })
  }

   prepareStyle(){
    const { style ={} } = this.props;
    const LILMText = style.LILMText || styles.LILMText;
    const LILMTextLoggedIn = style.LILMTextLoggedIn || styles.LILMTextLoggedIn;
    const LILMTextLoggedOut = style.LILMTextLoggedOut || styles.LILMTextLoggedOut;

    return {
      LILMButton: style.LILMButton || styles.LILMButton,
      LILMButtonContent: style.LILMButtonContent || styles.LILMButtonContent,
      LILMIconWrap: style.LILMIconWrap || styles.LILMIconWrap,
      LILMIcon: style.LILMIcon || styles.LILMIcon,
      LILMTextWrap: style.LILMTextWrap || styles.LILMTextWrap,
      LILMText: [LILMText, this.state.credentials ? LILMTextLoggedIn : LILMTextLoggedOut],
    }
  }

    onPress() {
    this.state.credentials
      ? this.Logout()
      : this.Login();

    this.props.onPress && this.props.onPress();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  StatusBarBackground: {
    height: 30,
    backgroundColor: "skyblue",
    margin: 50
  },

   LILMButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',

    height: 30,
    width: 175,
    paddingLeft: 2,

    backgroundColor: '#0059b3',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#0B5FB5',

    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  LILMButtonContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center'
  },
  LILMIconWrap:{
    flex:1
  },
  LILMIcon: {
    fontSize:14,
    color:'white'
  },
  LILMTextWrap:{
    flex:2,
    alignItems:'center'
  },
  LILMText: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Helvetica neue',
    fontSize: 14
  },
  LILMTextLoggedIn: {
    marginLeft: 5
  },
  LILMTextLoggedOut: {
    marginLeft: 18
  }

});

AppRegistry.registerComponent('linkedInLogin', () => linkedInLogin);
