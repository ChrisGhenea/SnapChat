import * as types from '../actions/actionTypes';
import * as actions from '../actions/actions';



const initState ={
	orders:[],
	userDeets:[],
	pendingOrders:[],
	acceptedOrders:[],
	dashView: {
		name:'orders',
		component:"order"
	}

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
	case types.FETCH_DATA:
	console.log('fetching Data...');
	
	return fetchData()
	
	case types.VIEW_ORDER:
	console.log('Orders')
	return{
	...state,
	dashView: {
		name:'orders',
		component:"orders"
	}
	};
	case types.VIEW_MAP:
	console.log(state)
	return{
	...state,
	dashView: {
		name:'Maps',
		component:"map"
	}
	};
	case types.NAVIGATE:
	return{
	...state
	};
	case types.ACCEPT_ORDER:

	return{
	...state
	}
	case types.DECLINE_ORDER:
	return{
	
	...state,
	dashView: {
		name:'orders',
		component:"orders"
	}
	}
	case types.CALL_USER:
	onsole.log('Call User');
	return{
	...state
	};
	case types.UPDATE_CUSTOMER:
	return{
	...state
	};
	case types.UPDATE_ORDERS_HOLDER:
	return{
	...state
	};
	case types.NEW_ORDER:
	return{
	...state
	};
	default:
	return state;

	}
}