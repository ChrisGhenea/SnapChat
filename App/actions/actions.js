import * as types from './actionTypes';
const Firebase = require('firebase');

export function login() {
  return {
    type: types.LOGIN
  };
}

export function capture() {
	console.log("1")
  return {
    type: types.CAPTURE
  };
}
