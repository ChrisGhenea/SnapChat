/* @flow */
'use strict';

import React, {
  Component,
} from 'react';

import CameraTopBar from "./dash-widgets/camera-top"
import CameraBottomBar from "./dash-widgets/camera-bottom"
import PictureBottomBar from "./dash-widgets/picture-bottom"
import PictureTopBar from "./dash-widgets/picture-top"
import Camera from "./dash-widgets/camera"
import Picture from "./dash-widgets/picture"

import {
  View,
  Text
} from 'react-native';

export default class Dashboard extends Component {
  constructor(props){
    super(props)

    console.log(this.props)

  }

  render() {
    if(!this.props.captured){
        return(<View style={{flex:1}}>
          <Camera {...this.props} style ={{flex:1}}/>
          </View>);}
        else{
          return(<View style={{flex:1}}>
          <Picture {...this.props} style ={{flex:1}}/>
          </View>);}
        }
  }
      
