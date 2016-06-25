/* @flow */
'use strict';

import React, {
  Component,
} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {
  View,
  Text,
  Image,
} from 'react-native';

export default class AddMe extends Component {
	constructor(props){
		super(props)
		this.state ={
			addMe:require("./../images/saveMe.png"),
			username:'SadCheese',
			points:'545'
		}

	}

	render() {
		return(<View style={{flex:1, backgroundColor:'#333'}}>
			<Image source={this.state.addMe} resizeMode="contain" style ={{width:150,height:150}}/>
			<Text>{this.state.username}</Text>
			<Text>Score: {this.state.points}</Text>
			<View style={{flexDirection:'row', margin:10}}><Icon name="android-happy" size={30} color="#fff"/><Text>Added Me</Text></View>
			<View style={{flexDirection:'row', margin:10}}><Icon name="user-plus" size={30} color="#fff"/><Text>Add Friend</Text></View>
			<View style={{flexDirection:'row', margin:10}}><IonIcon name="ios-paper-outline" size={30} color="#fff"/><Text>Add Friend</Text></View>
			</View>);
	}
}				
