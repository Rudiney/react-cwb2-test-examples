const token = 'PASTE YOUR TOKEN HERE'

const headers = new Headers({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
})

const url = 'https://app.pipefy.com/queries'

const query = `
{
  organization(id: 60364) {
    pipes { id name icon }
  }
}
`

export default () => fetch(url, {
  method: 'post',
  headers: headers,
  credentials: 'same-origin',
  body: JSON.stringify({ query: query, variables: {} }),
}).then((r) => r.json()).then((json) => json.data.organization.pipes)
