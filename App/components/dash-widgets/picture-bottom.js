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

import Icon from 'react-native-vector-icons/FontAwesome';
import IconI from 'react-native-vector-icons/MaterialIcons';

export default class PictureBottom extends Component {
  constructor(props){
    super(props)

    
    console.log(this.props)
  }

captureImage(){
  this.props.capture();
}
  render() {
    return(<View>
<View style={{flexDirection:'row', height:90, justifyContent:'space-between'}}> 
            <View  style={{flexDirection:'row',}}>
           <TouchableHighlight style={{flex: 1, }} >
          <IconI name="timer-3" style ={{margin:20,marginRight:0, alignSelf:'center'}} size={30} color="#fff" />
          </TouchableHighlight>
           <TouchableHighlight style={{flex: 1,}} >
          <IconI name="get-app" style ={{margin:20,marginRight:0, alignSelf:'center'}} size={35} color="#fff" />
          </TouchableHighlight>
           <TouchableHighlight style={{flex: 1,}} >
          <IconI name="playlist-add" style ={{margin:20,marginRight:0, alignSelf:'center'}} size={35} color="#fff" />
          </TouchableHighlight>
          </View>
          <View  style={{flexDirection:'row',}}>
          <TouchableHighlight style={{flex: 1,}}>
          <IconI name="send" style ={{margin:20, alignSelf:'center'}} size={30} color="#fff" />
            </TouchableHighlight>
            </View>
          </View>
      </View>);
  }
}        
