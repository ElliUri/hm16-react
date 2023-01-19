import { type } from "@testing-library/user-event/dist/type"

const GET_POSTS = {
  REQUEST: 'GET_POSTS_REQUEST',
  RECEIVE: 'GET_POSTS_RECEIVE',
  FAILURE: 'GET_POSTS_FAILURE'
}

const GET_POST = {
  REQUEST: 'GET_POST_REQUEST',
  RECEIVE: 'GET_POST_RECEIVE',
  FAILURE: 'GET_POST_FAILURE'
}

const UPDATE_POST = {
  REQUEST: 'UPDATE_POST_REQUEST',
  RECEIVE: 'UPDATE_POST_RECEIVE',
  FAILURE: 'UPDATE_POST_FAILURE'
}

const CREATE_POST = {
  REQUEST: 'CREATE_POST_REQUEST',
  RECEIVE: 'CREATE_POST_RECEIVE',
  FAILURE: 'CREATE_POST_FAILURE'
}

const DELETE_POST = {
  REQUEST: 'DELETE_POST_REQUEST',
  RECEIVE: 'DELETE_POST_RECEIVE',
  FAILURE: 'DELETE_POST_FAILURE'
}

const clearPostsActionCreator = () => {
    type: CLEAR_LIST
}

const clearDataActionCreator = () => {
    type: CLEAR_DATA
}


export {
  GET_POST,
  GET_POSTS,
  DELETE_POST,
  CREATE_POST,
  UPDATE_POST, 
  clearPostsActionCreator,
  clearDataActionCreator
}