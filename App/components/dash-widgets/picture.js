/* @flow */
'use strict';

import React, {
  Component,
} from 'react';


import {
  View,
  Text
} from 'react-native';

export default class Picture extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return(<Image source={require('./../../images/capturedImg.png')} resizeMode="contain" style={{flex:1}}>

      </Image>);
  }
}       
