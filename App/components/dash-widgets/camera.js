'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Camera from 'react-native-camera';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';
import BottomBar from './camera-bottom';
import TopBar from './camera-top';


export default class CameraComp extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
    this.state={
      captureStyle:{margin:15, alignSelf:'center', width:55, height:55},
      captureType: Camera.constants.Type.back,
      flashmode: Camera.constants.FlashMode.off
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
          aspect={Camera.constants.Aspect.fill}
          type={this.state.captureType}
          flashMode={this.state.flashmode}
          >
          <View style={{flex:1, justifyContent:'space-between'}}>
          <TopBar {...this.props}/>
          <View style={{height:40, backgroundColor:'#333', alignSelf:'center', justifyContent:'center', padding:10}}><Text style={{color:'#fff'}}>Camera Background Works on Device</Text></View>
          <View> 
          <BottomBar {...this.props.actions} {...this.props}/>
          </View>
          </View>
        </Camera>
      </View>
    );
  }

  takePicture() {
    
      this.setState({
captureStyle:{margin:17, alignSelf:'center', width:50, height:50}
      });
  }


pressedOut(){
  this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));

      this.setState({
captureStyle:{margin:15, alignSelf:'center', width:55, height:55}
      });
}}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,


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