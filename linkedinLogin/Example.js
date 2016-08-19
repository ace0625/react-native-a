'use strict';

import React, { Component } from 'react';
import {
   StyleSheet,
   View,
   Text,
   Image,
   TouchableOpacity
} from 'react-native';

import LinkedinLogin from 'react-native-linkedin-login'
import Icon from 'react-native-vector-icons/FontAwesome'
import Store from 'react-native-simple-store'

const example = class Example extends React.Component {

  constructor(props) {
    super(props);

    this._login = this._login.bind(this);
    this._logout = this._logout.bind(this);

    this.state = {
      user: null
    };
  }

  componentWillMount() {
    // initialize LinkedinApi
    LinkedinLogin.init(
      'https://www.linkedintest.org',
      '2krikav6u8j6',
      'SR1UCLdjBOj1udlB',
      'DCEEFWF45453sdffef424',
      [
        'r_emailaddress', 
        'r_basicprofile'
      ]
    );

    // get the user session from the store
    Store.get('user').then((user) => {
      if (user) {
        // set the api session if found
        LinkedinLogin.setSession(user.accessToken, user.expiresOn);

        this.setState({
          user
        });

        console.log('user', user);
      }
    });
  }
  _login() {
    console.log('_login');
    LinkedinLogin.login().then((user) => {
      console.log('User logged in: ', user);

      // recieved auth token
      this.setState({ user });
      Store.save('user', user).then(() => {
        // get the profile
        this._getUserProfile();
      });
    }).catch((e) => {
      console.log(e);
    });

    return true;
  }
  _logout() {
    LinkedinLogin.logout();
    console.log('user logged out');
    Store.delete('user');
    this.setState({ user: null });
  }

  _getUserProfile() {
    LinkedinLogin.getProfile().then((data) => {
      console.log('received profile', data);
      const userdata = Object.assign({}, this.state.user, data);

      console.log('user: ', userdata);
      this.setState({ user: userdata });

      Store.save('user', userdata).then(() => {
        this._getUserProfileImage();
      });
    }).catch((e) => {
      console.log(e);
    });
  }
  _getUserProfileImage() {
    LinkedinLogin.getProfileImages().then((images) => {
      console.log('received profile image', images);

      const userdata = Object.assign({}, this.state.user, { images });

      Store.save('user', userdata).then(() => {
        console.log('user: ', userdata);
        this.setState({ user: userdata });
      });
    }).catch((e) => {
      console.log(e);
    });
  }
  render() {
    if (!this.state.user) {
      return (
        <View style={ styles.container }>
          <Icon.Button
            name="linkedin"
            backgroundColor="#0039b3"
            onPress={ this._login }>
              Linkedin login
          </Icon.Button>
        </View>
      );
    }


    if (this.state.user) {
      const lastNameComp = (this.state.user.lastName) ? (
          <Text style={ { fontSize: 18, fontWeight: 'bold', marginBottom: 10 } }>
          Name : { `${this.state.user.firstName} ${this.state.user.lastName}` }
          </Text>
        ) : <View/>;
      const emailAddressComp = (this.state.user.emailAddress) ? (
        <Text style={ { fontSize: 18, fontWeight: 'bold', marginBottom: 10 } }>
        Email: { this.state.user.emailAddress }</Text>
      ) : <View/>;
      const imageComp = (this.state.user.images) ? (
        <Image
          source={ { uri: this.state.user.images[0].toString() } }
          style={ { width: 150, height: 150, marginBottom: 10} } />
      ) : <View/>;
      const expiresOnComp = (this.state.user.expiresOn) ? (
        <Text>Your token expires in: { this.state.user.expiresOn.toFixed() }</Text>
      ) : <View/>;

      const education = (this.state.user.industry) ? (
         <Text style={ { fontSize: 18, fontWeight: 'bold', marginBottom: 10 } }> 
          Education: { this.state.user.industry.toString() }</Text>
        ) : <View/>;

      return (
        <View style={ styles.container }>
           { imageComp }
           { lastNameComp }
           { education }
           { emailAddressComp }
           { expiresOnComp }
         

          <TouchableOpacity onPress={ this._logout }>
            <View style={ { marginTop: 100, backgroundColor : '#0039b3'} }>
              <Text>Log out</Text>
            </View>

          </TouchableOpacity>


        </View>
      );
    }
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

module.exports = example;
