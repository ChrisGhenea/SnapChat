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

import EachSnap from "./eachSnap"
import Search from "./../global-widgets/search-bar"


export default class SnapHolder extends Component {
  constructor(props){
    super(props)
     console.log(this.props)
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
    return(<Image source={require('./../../images/snapsBackground.png')} style={{flex:9}} resizeMode="contain">
      <Search />
      <ListView
        dataSource={this.state.dataSource}
        style = {{flex:12}}
        renderRow={(rowData) => <EachSnap {...this.props} data = {rowData} />}
                    />



      </Image>);
  }
}        
