import * as t from './actionTypes'
export const addPipe = (pipe) => ({ type: t.ADD_PIPE, payload: { pipe }})

import queryPipes from './queries/loadPipes'
export const loadPipes = () => {
  return (dispatch, getState) => {
    return queryPipes().then((pipes) => {
      pipes.forEach((pipe) => dispatch(addPipe(pipe)))
    })
  }
}
