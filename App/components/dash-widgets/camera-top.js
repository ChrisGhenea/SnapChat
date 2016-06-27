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

import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';


export default class CameraTop extends Component {
  constructor(props){
    super(props)
    console.log(this.props)

  }

  render() {
    return(<View>
<View style={{flexDirection:'row', height:90, justifyContent:'space-between'}}> 
          <TouchableHighlight style={{flex: 1,}}>
          <Icon name="flash" style ={{margin:20, marginLeft:0, alignSelf:'center'}} size={30} color="#fff" />
            </TouchableHighlight>
           <TouchableHighlight style={{flex: 1, }} onPress={() => {this.props.navigator.push({
           id: 'AddMe'
          });}} >
          <Icon name="snapchat-ghost" style ={{margin:20, alignSelf:'center'}} size={30} color="#fff" />
          </TouchableHighlight>
           <TouchableHighlight style={{flex: 1,}} >
          <IconI name="ios-reverse-camera-outline" style ={{margin:20, alignSelf:'center'}} size={35} color="#fff" />
          </TouchableHighlight>
          </View>
      </View>);
  }
}       
