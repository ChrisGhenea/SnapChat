'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Image,
  TouchableHighlight,
  View
} from 'react-native';
import Camera from 'react-native-camera';

export default class CameraComp extends Component {
  constructor(props){
    super(props)
    this.state={
      captureStyle:{margin:20, width:55, height:55}
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <TouchableHighlight style={styles.capture} style={{flex:1, justifyContent:'flex-end'}} onPressOut={this.pressedOut.bind(this)} onPressIn={this.takePicture.bind(this)}>
          <Image source={require('../../images/capture_icon.png')} style={this.state.captureStyle} resizeMode="contain" />
          </TouchableHighlight>
        </Camera>
      </View>
    );
  }

  takePicture() {
    
      this.setState({
captureStyle:{margin:23, width:50, height:50}
      });
  }


pressedOut(){
  this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));

      this.setState({
captureStyle:{margin:20, width:55, height:55}
      });
}}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});