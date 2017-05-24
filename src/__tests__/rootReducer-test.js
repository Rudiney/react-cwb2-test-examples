import * as actions from '../actions'
import reduce from '../rootReducer'

it('handles the default state', () => {
  expect(reduce(undefined, {})).toEqual({
    pipes: {}
  })
})

describe('addPipe action', function() {
  it('adds a pipe to pipes ¬¬', function() {
    const pipe = { id: 1, name: 'My Pipe' }
    const previousState = { pipes: { 9: { id: 9, name: 'Other Pipe' } } }
    const newState = reduce(previousState, actions.addPipe(pipe))
    expect(newState).toEqual({
      pipes: {
        9: { id: 9, name: 'Other Pipe' },
        1: pipe
      }
    })
  })
})
