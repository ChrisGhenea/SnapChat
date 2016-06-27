/* @flow */
'use strict';

import React, {
  Component,
} from 'react';


import {
  View,
  TouchableHighlight,
  Text,
  Image,
  ListView
} from 'react-native';


export default class RecentHolder extends Component {
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var snapsSample = [
    {
      name:"Amanda Palmer",
      opened:true,
      dataType: "message",
      relationship:1
    },
    {
      name:"Jason Bourne",
      opened:true,
      dataType: "message",
      relationship:2
    },
    {
      name:"Hank Moody",
      opened:true,
      dataType: "image",
      relationship:3
    },
    {
      name:"Hank Moody",
      opened:true,
      dataType: "image",
      relationship:3
    },
    {
      name:"Hank Moody",
      opened:true,
      dataType: "videoLoaded",
      relationship:3
    },

    ]
    this.state={
      dataSource: ds.cloneWithRows(snapsSample)
    }

  }

  render() {
    return(<View style={{flex:3}}>
      <Text style={{color:"#9B55A0", alignSelf:'center', fontSize:12, fontWeight:"600", margin:13}}>
      RECENT UPDATES </Text>
      </View>
      );
  }
}        
