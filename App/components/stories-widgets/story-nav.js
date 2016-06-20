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


export default class StoriesNav extends Component {
  constructor(props){
    super(props)
    console.log("nav")
  }

  render() {
    return(
      <View style={{flex:1, backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between'}}>
      <Image source={require('./../../images/camera_icon.png')} style={{margin:10, marginTop:25,}} resizeMode="contain" />
      <Image source={require('./../../images/Stories.png')} style={{margin:10, marginTop:25,}} resizeMode="contain" />
      <Image source={require('./../../images/Globe.png')} style={{margin:10, marginTop:25,}} resizeMode="contain" />

      </View>);
  }
}        
