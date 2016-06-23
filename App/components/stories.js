/* @flow */
'use strict';

import React, {
  Component,
  StatusBar,
} from 'react';

import Holder from "./stories-widgets/story-holder"
import Nav from "./stories-widgets/story-nav"


import {
  View,
  Text
} from 'react-native';

export default class Stories extends Component {
	constructor(props){
		super(props)

	}

	render() {
		return(<View style={{flex:1}}>

			<Nav {...this.props} />
			<Holder />
	
			</View>);
	}
}				
