global.fetch = require('jest-fetch-mock')

import loadPipes from '../loadPipes'

const fakeResponse = {
  data: {
    organization: {
      pipes: [
        { id: '2', name: 'Pizza Order' },
        { id: '4', name: 'Ligações' }
      ]
    }
  }
}

const expectedStructure = [
  { id: '2', name: 'Pizza Order' },
  { id: '4', name: 'Ligações' }
]

it('parse the server response to this structure', () => {
  fetch.mockResponse(JSON.stringify(fakeResponse))

  return loadPipes().then((pipes) => {
    expect(pipes).toEqual(expectedStructure)
  })
})
