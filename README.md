# React + Vite + Jest

1. Install the dependancies:
```
npm i -D jest @babel/preset-env @babel/preset-react @testing-library/react @testing-library/jest-dom jest-svg-transformer identity-obj-proxy jest-environment-jsdom
```
2. Change **.eslintrc.cjs** with this: 
```js
module.exports = {
  extends: ["react-app", "react-app/jest"],
};
```
3. Add `"test": "jest"` to **package.json** - **scripts**
4. Create `.babelrc` file in the root directory with this inside: 
```js
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
```
5. Add **setupTests.js** to root directory with the following code:
```js
import '@testing-library/jest-dom';
```
6. Add the following code in **package.json** bellow **devDependencies** object: 
```json
"jest": {
    "testEnvironment": "jsdom",
    "moduleNameMapper": {
      "^.+\\.svg$": "jest-svg-transformer",
      "^.+\\.(css|less|scss)$": "identity-obj-proxy"
    },
    "setupFilesAfterEnv": [
      "<rootDir>/setupTests.js"
    ]
  }
```
7. Add tests and run them with `npm test`
