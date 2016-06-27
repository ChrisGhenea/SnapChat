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
			<Image source={require("../images/logo.png")} style = {{width:250, height:250, marginBottom:400}}resizeMode="contain" />
			</View>);
	}
}				
