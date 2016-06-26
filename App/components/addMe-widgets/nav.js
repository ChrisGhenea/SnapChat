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


export default class Nav extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  render() {
    return(
      <View style={{flex:1, flexDirection:'row', justifyContent:'space-between'}}>
      <Image source={require('./../../images/questions.png')} style={{margin:10, width:30, height:30, marginBottom:0}} resizeMode="contain" />
      <View />
      <Image source={require('./../../images/settings.png')} style={{margin:10, width:30, height:30, marginBottom:0}} resizeMode="contain" />

      </View>);
  }
}        
