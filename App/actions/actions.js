import * as types from './actionTypes';
const Firebase = require('firebase');

export function login() {
  return {
    type: types.LOGIN
  };
}

export function capture() {
  return {
    type: types.CAPTURE
  };
}
