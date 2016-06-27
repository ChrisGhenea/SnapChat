/* @flow */
'use strict';

import React, {
  Component,
} from 'react';

import Nav from "./chats-widgets/chats-nav";
import Holder from "./chats-widgets/chats-holder";
import BottomBit from "./chats-widgets/chats-bottom";

import {
  View,
  Text
} from 'react-native';

export default class Chats extends Component {
	constructor(props){
		super(props)
		    console.log(this.props)

	}

	render() {
		return(<View style={{flex:1, justifyContent:'space-between'}}>
			<Nav {...this.props} />
			<Holder />
			<BottomBit />
			</View>);
	}
}				
