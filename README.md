# Michelle 14
This is a React TS experimental web application. The project was named after [Michelle Bartsch-Hackley](https://youtu.be/p7bvtVlCeAg) (number 14) a volleyball player of the US national team. 

Instead of [CRA](https://create-react-app.dev/docs/adding-typescript), the project was initialized from scratch following 
[Creating A React App From Scratch Using Snowpack](https://youtu.be/QAwW0E9BXKc)

Other useful sources to learn and reference:
- [Stefan Baumgartner's TypeScript and React](https://fettblog.eu/typescript-react/) is brutally elegant and in itself it is a reason to pick React. Read his articles before doing anything in React.
- [Jeff Herrington YouTube Channel](https://www.youtube.com/watch?v=Cos-ctPX5hw)  has Tons of Great Information

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

These are the dependencies CRA created:
```
{
  "name": "michelle14",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "@types/jest": "^26.0.24",
    "@types/node": "^12.20.16",
    "@types/react": "^17.0.14",
    "@types/react-dom": "^17.0.9",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "typescript": "^4.3.5"
  },
  "scripts": {
    "lint" : "npx eslint src/",
    "fix" : "npx eslint src/ --fix"
  },
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^4.28.2",
    "@typescript-eslint/parser": "^4.28.2",
    "eslint": "^7.30.0",
    "eslint-plugin-react": "^7.24.0"
  }
}
```
