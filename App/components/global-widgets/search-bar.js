/* @flow */
'use strict';

import React, {
  Component,
} from 'react';


import {
  View,
  TouchableHighlight,
  Text,
  TextInput,
  Image
} from 'react-native';


export default class Search extends Component {
  constructor(props){
    super(props)
    this.state ={
      text : ""
    }
  }

  render() {
    return(
      <View style={{flexDirection:'row', height:50, borderBottomWidth:1, borderColor:'#eee',  justifyContent:'space-between'}}>
      <Image source ={require('./../../images/search.png')} resizeMode="contain" style={{margin:8, height:20, width:20, alignSelf:'center'}}/>
      <TextInput 
      style={{flex:8, margin:8 }}
    onChangeText={(text) => this.setState({text})}
    placeholder="Search"
    value={this.state.text}
      />
      </View>);
  }
}        
