# Examples:
- [Snapshoting dumb components](/src/components/__tests__/CustomSelect-test.js#L7-L19)
- [Testing component state](/src/components/__tests__/CustomSelect-test.js#L28-L60)
- [Ajax with Fetch](/src/queries/__tests__/loadPipes-test.js)
- [Redux Action](/src/__tests__/actions-test.js)
- [Redux Reducers](/src/__tests__/rootReducer-test.js)
- [Redux Async Action](/src/__tests__/async-actions-test.js)

# Links:
- [Jest Expects](https://facebook.github.io/jest/docs/expect.html)
- [Enzyme API](http://airbnb.io/enzyme/docs/api/index.html)
- [Redux testing guides](http://redux.js.org/docs/recipes/WritingTests.html)

# Libs:
- jest
- react-test-renderer
- enzyme
- jest-fetch-mock
- redux-mock-store

# Steps
1. [Install yarn](https://yarnpkg.com/lang/en/docs/install/)
1. `yarn install`
1. `yarn test` to run the suite (press `a` to run all files)

### Want to see the Pipefy's API Request firing?
1. Signup/login to your [Pipefy account](https://www.pipefy.com)
2. Get your API token:

Go to User Settings:
![User Settings](http://i.imgur.com/azG6Xj0.png)

Personal Access Tokens:
![Personal Access Tokens](http://i.imgur.com/NhSKJen.png)

Create a new token and copy it
![The new token](http://i.imgur.com/jYWOdnR.png)

Paste it in the file [`src/queries/loadPipes.js`](https://github.com/Rudiney/react-cwb2-test-examples/blob/master/src/queries/loadPipes.js).

3. run `yarn start` and you will see the ugly buttons in the browser
