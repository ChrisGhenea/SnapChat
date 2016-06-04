import * as types from './actionTypes';
const Firebase = require('firebase');

export function login() {
  return {
    type: types.LOGIN
  };
}

export function fetch_data() {
	console.log('Action Triggered')
  return {
    type: types.FETCH_DATA
  };
}

export function view_map() {
	console.log('Action Triggered Maps')
  return {
    type: types.VIEW_MAP
  };
}

export function view_order() {
	console.log('Action Triggered')
  return {
    type: types.VIEW_ORDER
  };
}

export function accept_order() {
  console.log('Action Triggered')
  return {
    type: types.ACCEPT_ORDER
  };
}

export function decline_order() {
  console.log('Action Triggered');


var url = 'https://candy-snack.firebaseio.com/Pending-Orders/'
var illRef = new Firebase(url);

illRef.remove();
  return {
    type: types.DECLINE_ORDER
  };
}
