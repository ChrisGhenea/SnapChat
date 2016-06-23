/* @flow */
'use strict';

import React, {
  Component,
} from 'react';


import {
  TouchableHighlight,
  ListView,
  View,
  Image,
} from 'react-native';

import Live from "./live-row"
import Discover from "./discover-row"
import Recent from "./recent-story-holder"
import Search from "./../global-widgets/search-bar"

var count = 0;

export default class StoryHolder extends Component {
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var storySample = [
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
      dataSource: ds.cloneWithRows(storySample)
    }

  }


eachDisc(x){
  if(count < 6){
    count++;
  }
    else{
      count = 1
    }
    return(
    <Image source={this.generateImage(count)} resizeMode="stretch" style={{width:60,height:60, margin:5}} />
    )}

generateImage(val){
  if(val == 1){
    return(require('./../../images/circleDisc1.png'));
  }
  if(val == 2){
    return(require('./../../images/circleDisc2.png'));
  }
  if(val == 3){
    return(require('./../../images/circleDisc3.png'));
  }
  if(val == 4){
    return(require('./../../images/circleDisc4.png'));
  }
  if(val == 5){
    return(require('./../../images/circleDisc5.png'));
  }
}
  render() {
    return(
      <View>
      <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => this.eachDisc(rowData)}
      horizontal ={true}
      style = {{flex:1}}
      />
      </View>
      );
  }
}        
