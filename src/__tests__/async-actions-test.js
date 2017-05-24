global.fetch = require('jest-fetch-mock')

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from '../actions'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('loadPipes', () => {
  it('dispach an AddPipe for every pipe returned', () => {
    const pipe1 = { id: '1', name: 'Pizza Order' }
    const pipe2 = { id: '2', name: 'Ligações' }
    const fakeResponse = {
      data: { organization: { pipes: [pipe1,pipe2] }}
    }

    fetch.mockResponse(JSON.stringify(fakeResponse))

    const expectedActions = [
      actions.addPipe(pipe1),
      actions.addPipe(pipe2)
    ]

    const store = mockStore({})

    return store.dispatch(actions.loadPipes()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
