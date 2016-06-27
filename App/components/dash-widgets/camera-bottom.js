/* @flow */
'use strict';

import React, {
  Component,
} from 'react';


import {
  View,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/Ionicons';

export default class CameraBottom extends Component {
  constructor(props){
    super(props)

    
    console.log(this.props)
  }

captureImage(){
  this.props.capture();
}
  render() {
    return(<View style={{flexDirection:'row', height:90, justifyContent:'space-between'}}>
<TouchableOpacity onPress={() => {this.props.navigator.replace({
           id: 'Snaps'
          });}} style={{flex: 1, backgroundColor: '#fff', borderRadius: 5, color: '#000', padding: 10, margin: 40 }} style={{flex:1,}} >
            <View style={{width:30, height:30, margin:30, marginLeft:0, alignSelf:'center', borderRadius:5, borderWidth:2, borderColor:'#fff'}}/>
            </TouchableOpacity>
           <TouchableOpacity style={{flex: 1,}} onPress={() => this.captureImage()} >
          <Image source={require('../../images/capture_icon.png')} style={{margin:15, alignSelf:'center', width:55, height:55}} resizeMode="contain" />
          </TouchableOpacity>
           <TouchableOpacity onPress={() => {this.props.navigator.replace({
           id: 'Stories'
          });}} style={{flex: 0, backgroundColor: '#fff', borderRadius: 5, color: '#000', padding: 10, margin: 40 }} style={{flex:1,}} >
          <Icon name="bars" style ={{margin:30, alignSelf:'center'}} size={32} color="#fff" />
          </TouchableOpacity>
      </View>);
  }
}        
