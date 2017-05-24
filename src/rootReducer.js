import { combineReducers } from 'redux'
import * as t from './actionTypes'

const pipes = (state = {}, action) => {
  switch (action.type) {
    case t.ADD_PIPE:
      const newPipe = action.payload.pipe
      return { ...state, ...{ [newPipe.id]: newPipe }}

    default:
      return state
  }
}

export default combineReducers({ pipes })
