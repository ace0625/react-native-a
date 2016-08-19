import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  PixelRatio,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';

import ImgPicker from 'react-native-image-picker';

export default class UiTest extends Component {

  state = {
    imgSource: null,

  };

  selectPhoto() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
      skipBackup: true
      }
    };

    ImgPicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source;

        // You can display the image using either:
        source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // Or:
        // if (Platform.OS === 'android') {
        //   source = {uri: response.uri, isStatic: true};
        // } else {
        //   source = {uri: response.uri.replace('file://', ''), isStatic: true};
        // }

        this.setState({
          imgSource: source
        });
      }
    });
  }



  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
						onPress={this.selectPhoto.bind(this)}>
          		<View style={[styles.rounder, styles.roundContainer, {marginTop: 50}]}>
          		{
								this.state.imgSource === null ? <Text>Select a Photo</Text> :
            		<Image style={styles.rounder} source={this.state.imgSource} />
          		}
          	</View>
        </TouchableOpacity>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  //  justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  roundContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  rounder: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});
