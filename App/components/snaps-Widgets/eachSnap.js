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
  StyleSheet,
} from 'react-native';



export default class SnapHolder extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
  }

  generateImage(image){
    if(image == "message"){
      return(
        <Image style={styles.images} resizeMode="contain" source={require('./../../images/blueSquare.png')} />
        )
    }
    if(image == "messageLoaded"){
      return(
        <Image style={styles.images} resizeMode="contain" source={require('./../../images/emptyBlueSquare.png')} />
        )
    }
    if(image == "video"){
      return(
        <Image style={styles.images} resizeMode="contain" source={require('./../../images/purpleSquare.png')} />
        )
    }
    if(image == "videoLoaded"){
      return(
        <Image style={styles.images} resizeMode="contain" source={require('./../../images/emptyPurple.png')} />
        )
    }
    if(image == "image"){
      return(
        <Image style={styles.images} resizeMode="contain" source={require('./../../images/redSquare.png')} />
        )
      
    }if(image == "imageLoaded"){
      return(
        <Image style={styles.images} resizeMode="contain" source={require('./../../images/redSquareEmpty.png')} />
        )
      
    }
  }

  generateRelationship(val){
    if(val == 1){

    }
  }

  render() {
    return(
      <View style={{flexDirection:'row', flex:1, justifyContent:'space-between'}}>
     {this.generateImage(this.props.data.dataType)}
      <Text> {this.props.data.name} </Text>


      </View>
      );
  }
} 

var styles = StyleSheet.create({
 
  images: {
    width:30,
    height:30,
    margin:3
  },
});

