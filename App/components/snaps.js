/* @flow */
'use strict';

import React, {
  Component,
} from 'react';

import Holder from "./snaps-Widgets/snap-holder"
import Nav from "./snaps-Widgets/snap-nav"


import {
  View,
  Text
} from 'react-native';

export default class Snaps extends Component {
	constructor(props){
		super(props)

	}

	render() {
		return(<View style={{flex:1}}>
			<Nav {...this.props} />
			<Holder {...this.props} />
	
			</View>);
	}
}				
