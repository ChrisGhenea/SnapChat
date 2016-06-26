import * as types from '../actions/actionTypes';
import * as actions from '../actions/actions';



const initState ={
	captured:false,


};

var initialState = {
  count: 0
};




export function SnapChat(state = initState, action = {}){
	switch(action.type){
	case types.LOGIN:
	return{
	...state,
	userDeets: {name: "Sam Okoro"}
	};
	case types.CAPTURE:
		console.log("2");
	return{
	...state,
	captured: true
	};
	
	
	default:
	return state;

	}
}