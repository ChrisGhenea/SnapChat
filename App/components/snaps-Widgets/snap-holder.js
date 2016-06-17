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



export default class SnapHolder extends Component {
  constructor(props){
    super(props)

  }

  render() {
    return(<Image source={require('./../../images/snapsBackground.png')} style={{flex:9}} resizeMode="contain">
      

      </Image>);
  }
}        
