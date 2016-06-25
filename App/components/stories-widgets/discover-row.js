/* @flow */
'use strict';

import React, {
  Component,
} from 'react';


import {
  TouchableHighlight,
  ListView,
  Text,
  View,
  Image,
} from 'react-native';

import Live from "./live-row"
import Discover from "./discover-row"
import Recent from "./recent-story-holder"
import Search from "./../global-widgets/search-bar"

var count = 0;

export default class DiscoverRow extends Component {
  constructor(props){
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var storySample = [
    {
      name:"BuzzFeed",
    },
    {
      name:"Discover",
    },
    {
      name:"ESPN",
    },
    {
      name:"HBO",
    },
    {
      name:"HULU",
    },{
      name:"BuzzFeed",
    },
    {
      name:"Discover",
    },
    {
      name:"ESPN",
    },
    {
      name:"HBO",
    },
    {
      name:"HULU",
    },

    ]
    this.state={
      dataSource: ds.cloneWithRows(storySample)
    }

  }


eachDisc(x){
  if(count < 5){
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
      <View style={{flex:1}}>
      <Text style={{color:"#9B55A0", alignSelf:'center', fontSize:12, fontWeight:"600", margin:13}}>
      DISCOVER </Text>
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
