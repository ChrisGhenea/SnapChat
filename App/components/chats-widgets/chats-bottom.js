/* @flow */
'use strict';

import React, {
  Component,
} from 'react';


import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/MaterialIcons';

export default class ChatBottom extends Component {
  constructor(props){
    super(props)
    console.log("nav")
    this.state={
      text:""
    }
  }

  render() {
    return(
      <View style={{height:50, borderTopWidth:1, borderTopColor:'#f1f2f2', backgroundColor:'#fff', borderBottomWidth:1, borderBottomColor:'#f1f2f2', flexDirection:'row', justifyContent:'space-between'}}>
      <TextInput 
      style={{flex:9, margin:8 }}
    onChangeText={(text) => this.setState({text})}
    placeholder="Send a Chat"
    value={this.state.text}
      />
      <TouchableOpacity style={{flex:2}} >
      <View style={{flex:1, alignItems:'center', justifyContent:'center',borderRadius:10, margin:5, backgroundColor:'#3cb2e2'}}>
      <IconI name="blur-circular" size={30} color="#fff"/>
      </View>
      </TouchableOpacity>
      </View>);
  }
}        
