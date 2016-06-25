/* @flow */
'use strict';

import React, {
  Component,
} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Nav from "./stories-widgets/story-nav"

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
		return(<View style={{flex:1, backgroundColor:'#000', alignItems:'center'}}>
			<Nav />
			<Image source={this.state.addMe} resizeMode="contain" style ={{width:150,height:150, marginTop:50}}/>
			<Text style={{color:'#fff', }}>{this.state.username}</Text>
			<Text style={{color:'#fff', fontSize:10}}>Score: {this.state.points}</Text>
			<View style={{flexDirection:'row', margin:10, alignSelf:'center'}}><Image source={require('./../images/smileYo.png')} resizeMode="contain" style={{margin:10,width:30,height:30}} /><Text style={{color:'#fff', margin:10, alignSelf:'center'}}>Added Me</Text></View>
			<View style={{flexDirection:'row', margin:10, alignSelf:'center'}}><Image source={require('./../images/addPerson.png')} resizeMode="contain" style={{margin:10,width:30,height:30}} /><Text style={{color:'#fff',margin:10, alignSelf:'center'}}>Add Friend</Text></View>
			<View style={{flexDirection:'row', margin:10, alignSelf:'center'}}><Image source={require('./../images/friendsAdd.png')} resizeMode="contain" style={{margin:10,width:30,height:30}} /><Text style={{color:'#fff', margin:10, alignSelf:'center'}}>Add Friend</Text></View>
			</View>);
	}
}				
