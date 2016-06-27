/* @flow */
'use strict';

import React, {
  Component,
} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Nav from "./addMe-widgets/nav"
import IconI from 'react-native-vector-icons/MaterialIcons';

import {
  View,
  Text,
  Image,TouchableOpacity
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
		return(<View style={{flex:1, backgroundColor:'#000'}}>
			<Nav />
			<View style={{flex:9, alignSelf:'center'}}>
			<Image source={this.state.addMe} resizeMode="contain" style = {{width:150,height:150, marginLeft:20, marginTop:20}}/>
			<Text style={{color:'#fff',alignSelf:'center' }}>{this.state.username}</Text>
			<Text style={{color:'#fff',alignSelf:'center', fontSize:10}}>Score: {this.state.points}</Text>
			<View style={{flexDirection:'row', margin:20, alignSelf:'center'}}><Image source={require('./../images/smileYo.png')} resizeMode="contain" style={{marginRight:10,width:30,height:30}} /><Text style={{color:'#fff', textAlign:'center', alignSelf:'center', fontSize:20}}>Added Me</Text></View>
			<View style={{flexDirection:'row', margin:20, alignSelf:'center'}}><Image source={require('./../images/addPerson.png')} resizeMode="contain" style={{marginRight:10,width:30,height:30}} /><Text style={{color:'#fff', alignSelf:'center', fontSize:20}}>Add Friend</Text></View>
			<View style={{flexDirection:'row', margin:20, alignSelf:'center'}}><Image source={require('./../images/friendsAdd.png')} resizeMode="contain" style={{marginRight:10,width:30,height:30}} /><Text style={{color:'#fff', alignSelf:'center', fontSize:20}}>Add Friend</Text></View>
			</View>
			<TouchableOpacity onPress={() => this.props.navigator.pop()}>
			<IconI name="expand-more" style ={{margin:20, alignSelf:'center', }} size={35} color="#fff" />
			</TouchableOpacity>
			</View>);
	}
}				
