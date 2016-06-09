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
import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';

export default class CameraComp extends Component {
  constructor(props){
    super(props)
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
<View style={{flexDirection:'row', height:90, justifyContent:'space-between'}}> 
          <TouchableHighlight style={styles.capture} style={{flex:1,}} >
          <Icon name="flash" style ={{margin:20, marginLeft:0, alignSelf:'center'}} size={30} color="#fff" />
            </TouchableHighlight>
           <TouchableHighlight style={styles.capture} style={{flex:1, }} >
          <Icon name="snapchat-ghost" style ={{margin:20, alignSelf:'center'}} size={30} color="#fff" />
          </TouchableHighlight>
           <TouchableHighlight style={styles.capture} style={{flex:1,}} >
          <IconI name="ios-reverse-camera-outline" style ={{margin:20, alignSelf:'center'}} size={35} color="#fff" />
          </TouchableHighlight>
          </View>

          <View style={{flexDirection:'row', height:90, justifyContent:'space-between'}}> 
          <TouchableHighlight style={styles.capture} style={{flex:1,}} >
            <View style={{width:30, height:30, margin:30, marginLeft:0, alignSelf:'center', borderRadius:5, borderWidth:2, borderColor:'#fff'}}/>
            </TouchableHighlight>
           <TouchableHighlight style={styles.capture} style={{flex:1, }} onPressOut={this.pressedOut.bind(this)} onPressIn={this.takePicture.bind(this)}>
          <Image source={require('../../images/capture_icon.png')} style={this.state.captureStyle} resizeMode="contain" />
          </TouchableHighlight>
           <TouchableHighlight style={styles.capture} style={{flex:1,}} >
          <Icon name="bars" style ={{margin:30, alignSelf:'center'}} size={32} color="#fff" />
          </TouchableHighlight>
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