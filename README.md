# flaky-test-cypress

> The Flaky Test Challenge

![App](./images/app.png)

## Levels

There are several flaky situations. Each example is in its own branch and includes changes to the application source code and the testing code. Can you solve each one by fixing the _test code_ only?

- branch [level1](https://github.com/bahmutov/flaky-test-cypress/tree/level1) to warm you up
- branch [level2](https://github.com/bahmutov/flaky-test-cypress/tree/level2) where you need to burn the test to prove it is flaky or not
- branch [level3](https://github.com/bahmutov/flaky-test-cypress/tree/level3) shows a fast test that somehow still fails

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

- open Cypress test runner with `npx cypress open` command. Click on the [app.cy.js](./cypress/e2e/app.cy.js) spec to run it.

Did the spec pass?

## Small print

The original application code forked from [dangi13/flaky-test-cypress](https://github.com/dangi13/flaky-test-cypress).

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2024

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)
- [videos](https://www.youtube.com/glebbahmutov)
- [presentations](https://slides.com/bahmutov)
- [cypress.tips](https://cypress.tips)
- [Cypress Tips & Tricks Newsletter](https://cypresstips.substack.com/)
- [my Cypress courses](https://cypress.tips/courses)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/flaky-test-cypress/issues) on Github
