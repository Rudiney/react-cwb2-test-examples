import * as t from '../actionTypes'
import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to add a pipe', () => {
    const pipe = { id: 1, name: 'My Pipe' }

    const expected = {
      type: t.ADD_PIPE,
      payload: { pipe }
    }
    expect(actions.addPipe(pipe)).toEqual(expected)
  })
})
