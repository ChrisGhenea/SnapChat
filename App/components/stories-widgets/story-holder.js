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
  ListView,
  ScrollView
} from 'react-native';

import Live from "./live-row"
import Discover from "./discover-row"
import Recent from "./recent-story-holder"
import Search from "./../global-widgets/search-bar"


export default class StoryHolder extends Component {
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
    return(<Image source={require('./../../images/snapsBackground.png')} style={{flex:9}} resizeMode="contain">
      <Search />
      <ScrollView>
      <Discover />
      <Live />
      <Recent />
      </ScrollView>



      </Image>);
  }
}        
