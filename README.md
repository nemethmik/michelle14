# Michelle 14
This is a React TS experimental web application. The project was named after Michelle (14) a volleyball player of the US national team. 

This project was bootstrapped with [npx create-reactapp michelle14 --template typescript ](https://create-react-app.dev/docs/adding-typescript).
The next step is to enable [ESLint[(https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba)] for the project to be able to execute
fixing sigle quotes and trailing semicolons.
- **npm install eslint --save-dev** 
- **npx eslint --init** to get **.eslintrc.json**
- Install and enable ESLint extension. Be patient, when you change .eslintrc.json, if the file is open, sometimes, it may not immediately recognize the rules added, remember that most rules has **@typescript-eslint** prefix. 
These are the rules I can live with:
```
    "overrides": [
        {
          // enable the rule specifically for TypeScript files
          "files": ["*.ts", "*.tsx"],
          "rules": {
            "@typescript-eslint/explicit-module-boundary-types": ["warn", {"allowArgumentsExplicitlyTypedAsAny":true}],
            "@typescript-eslint/no-explicit-any":"warn",
            "quotes": ["error","double",{ "allowTemplateLiterals": true } ],
            "@typescript-eslint/semi": ["error", "never"]
          }
        }
      ]
```

Two scripts were added to package.json:
- "lint" : "npx eslint src/" run it as **npm run lint**
- "fix" : "npx eslint src/ --fix" for **npm run fix**
Both works recursively under the src folders nicely.

The sample code in App.tsx
```
import React from "react"
enum TGender {male = "M",female="F"}
export const App = ():JSX.Element => <p>The Female code is {TGender.female}</p>
```
demonstrates that JSX/TSX is brutally flexible, even TypScript enums are allowed.

[Stefan Baumgartner's TypeScript and React](https://fettblog.eu/typescript-react/) is brutally elegant and in itself it is a reason to pick React. Read his articles before doing anything in React.
[Jeff Herrington YouTube Channel](https://www.youtube.com/watch?v=Cos-ctPX5hw)  has Tons of Great Information

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
