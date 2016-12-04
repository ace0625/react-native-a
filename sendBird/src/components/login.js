import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import SendBird from 'sendbird';

class Login extends Component {
  constructor(props) {
    super(props);

    let sb = new SendBird({
      app_id: '6A851F2D-3402-47D3-A31A-70EE34686F4A',
    });

    this.state = {
      username: '',
    };
  }

  onPress() {
    console.log(this.state.username);
    // SendBird.init({
    //   app_id: '6A851F2D-3402-47D3-A31A-70EE34686F4A',
    //   guest_id: this.state.username,
    //   user_name: this.state.username,
    //   image_url: '',
    //   access_token: '',
    //   successFunc: (data) => {
    //     console.log('success');
    //   },
    //
    //   errorFunc: (status, error) => {
    //     this.setState({ username: '' });
    //   },
    // });

    sb.connect(USER_ID, function(user, error) {
      
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <TextInput
            style={styles.input}
            value={this.state.username}
            onChangeText={(text) => this.setState({ username: text })}
            placeholder={'Enter User Nickname'}
            maxLength={12}
            multiline={false}
            />

          <TouchableHighlight
            style={styles.button}
            underlayColor={'#328FE6'}
            onPress={this.onPress.bind(this)}
            >
            <Text style={styles.label}>LOGIN</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch',
    },
  loginContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  input: {
      width: 250,
      color: '#555555',
      padding: 10,
      height: 50,
      borderColor: '#32C5E6',
      borderWidth: 1,
      borderRadius: 4,
      alignSelf: 'center',
      backgroundColor: '#ffffff',
    },
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#328FE6',
      padding: 10,
      marginTop: 10,
      backgroundColor: '#32c5e6',
    },
  label: {
      width: 230,
      flex: 1,
      alignSelf: 'center',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: '600',
      color: '#ffffff',
    },
});

module.exports = Login;
