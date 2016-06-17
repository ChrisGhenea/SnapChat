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



export default class SnapHolder extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  generateImage(image){
    if(image == "message"){
      return(
        <Image source={require('./../../images/blueSquare.png')} />
        )
    }
    if(image == "messageLoaded"){
      return(
        <Image source={require('./../../images/emptyBlueSquare.png')} />
        )
    }
    if(image == "video"){
      return(
        <Image source={require('./../../images/purpleSquare.png')} />
        )
    }
    if(image == "videoLoaded"){
      return(
        <Image source={require('./../../images/emptyPurple.png')} />
        )
    }
    if(image == "image"){
      return(
        <Image source={require('./../../images/redSquare.png')} />
        )
      
    }if(image == "imageLoaded"){
      return(
        <Image source={require('./../../images/redSquareEmpty.png')} />
        )
      
    }
  }

  render() {
    return(
      <View style={{flexDirection:'row', flex:1, justifyContent:'space-between'}}>
      <Text> {this.props.data.name} </Text>
      </View>
      );
  }
}        
