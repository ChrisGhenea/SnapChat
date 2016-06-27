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
import IconI from 'react-native-vector-icons/MaterialIcons';

export default class ChatNav extends Component {
  constructor(props){
    super(props)
    console.log("nav")
  }

  render() {
    return(
      <View style={{height:70, backgroundColor:'#fff', borderBottomWidth:1, borderBottomColor:'#f1f2f2', flexDirection:'row', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row'}}>
      <IconI size={25} name="menu" style={{margin:10, marginTop:25,}} color="#3cb2e2" />
      <Text style={{margin:10, marginTop:28,color:'#3cb2e2', fontWeight:"500", fontSize:17}}>{this.props.name}</Text>
      </View>
      <TouchableOpacity onPress={() => this.props.navigator.pop()}>
      <IconI name="chevron-right" style={{margin:10, marginTop:25,}} size={35} color="#3cb2e2"/>
      </TouchableOpacity>
      </View>);
  }
}        
