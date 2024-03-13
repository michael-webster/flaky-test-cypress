# flaky-test-cypress

> The Flaky Test Challenge

## Levels

There are several flaky situations. Each example is in its own branch and includes changes to the application source code and the testing code. Can you solve each one by fixing the _test code_ only?

- `level1` to warm you up

## Install and run the app

- clone this repo to your local machine
- check out a branch with the flaky test `git checkout level1`, `git checkout level2`, etc
- run `npm install` to install all dependencies
- start the app in one terminal with `npm start`. You should see:

```
Compiled successfully!

The app is running at:

  http://localhost:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

- open Cypress test runner with `npx cypress open` command. Click on the `app.cy.js` spec to run it.

Did the spec pass?
