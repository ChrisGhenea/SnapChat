/* @flow */
'use strict';

import React, {
  Component,
} from 'react';


import {
  View,
  TouchableOpacity,
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
      <TouchableOpacity onPress={() => this.props.navigator.push({id:'chat', passProps: {
      name: this.props.data.name
    }})}style={{flexDirection:'row', flex:1, borderBottomWidth:1, padding:10, borderColor:'#eee',  justifyContent:'space-between'}}>
     <View style={{flexDirection:'row', flex:2,  justifyContent:'space-between'}}>
     {this.generateImage(this.props.data.dataType)}
      <Text style={{alignSelf:'center', textAlign:"right", fontSize:14}}> {this.props.data.name} </Text>
      </View>
      <View style={{flex:2}} />


      </TouchableOpacity>
      );
  }
} 

var styles = StyleSheet.create({
 
  images: {
    width:23,
    height:23,
    margin:3
  },
});

