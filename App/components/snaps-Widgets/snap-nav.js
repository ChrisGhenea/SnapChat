/* @flow */
'use strict';

import React, {
  Component,
} from 'react';


import {
  View,
  TouchableHighlight,
  Text,
  Image
} from 'react-native';


export default class SnapNav extends Component {
  constructor(props){
    super(props)
    console.log("nav")
  }

  render() {
    return(
      <View style={{flex:1, backgroundColor:'#01A588', flexDirection:'row', justifyContent:'space-between'}}>
      <Image source={require('./../../images/Talkbubble.png')} style={{margin:20}} resizeMode="contain" />
      <Image source={require('./../../images/snapchat.png')} style={{margin:20}} resizeMode="contain" />
      <Image source={require('./../../images/cameraicon.png')} style={{margin:20}} resizeMode="contain" />

      </View>);
  }
}        
