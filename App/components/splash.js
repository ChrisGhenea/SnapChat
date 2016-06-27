/* @flow */
'use strict';

import React, {
  Component,
} from 'react';

import {
  View,
  Text,
  Image
} from 'react-native';

export default class Splash extends Component {
	constructor(props){
		super(props)
		console.log(this.props)
	}

	componentDidMount(){
		setTimeout(() => this.nav(), 3000);
		
	}

	nav(){
	  this.props.navigator.replace({
			 id: 'Dashboard'
		});
	}

	render() {
		return(<View style ={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'#fff73f'}}>
			<Image source={require("../images/logo.png")} style = {{width:300, height:300, marginBottom:300}}resizeMode="contain" />
			</View>);
	}
}				
