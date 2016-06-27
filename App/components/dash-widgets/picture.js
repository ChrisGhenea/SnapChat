/* @flow */
'use strict';

import React, {
  Component,
} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';
import BottomBar from './picture-bottom';
import TopBar from './picture-top';

import {
  View,
  Text,
  Image,
  PixelRatio
} from 'react-native';

export default class Picture extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return(
      <Image source={require('./../../images/capturedImg.png')} style={{flex:1, width:null, height:null, justifyContent:'space-between'}}>
      <TopBar {...this.props.actions} />
      <BottomBar />
      </Image>);
  }
}       
