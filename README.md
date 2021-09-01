# Michelle 14
This is a React TS experimental web application. The project was named after [Michelle Bartsch-Hackley](https://youtu.be/p7bvtVlCeAg) (number 14) a volleyball player of the US national team. 
---
## Web Components
Web Components are with us for a while and market/community/business acceptance os mature enough: [Lit (formerly Lit Element)](https://lit.dev/) and Stencil, Ionic are librraies based on Web Components. Number of these videos are from  Marcus Hellberg (vaadin).
The [vaadin core web components](https://vaadin.com/components) are [free on GitHub](https://github.com/vaadin/vaadin) and excellent, perfectly fine for business applications. Most of them are free including a decent grid; some of them are not free, but those features are not really relevant to mobile applications.

- [Build an app with WebComponents in 9 minutes, 2018.10.11](https://youtu.be/mTNdTcwK3MM) shows explains the basics with plain JS.
- [Web Components Crash Course, 2020](https://youtu.be/PCWaFLy3VUo) a decent example app from Traversy.
- [How to use Web Components in a JavaScript project, 2018.12.12](https://youtu.be/88Sa-SlHRxk)
  - Here is the accompanying website by Marcus Hellberg [using-web-components](https://vaadin.com/learn/tutorials/using-web-components)
- [Using Web Components in React, 2018.12.12](https://youtu.be/2B4rTQYJHL8)
- [lit-plugin Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=runem.lit-plugin)

Eventually, I found that Li/Lit-Elements just like Stencil are self contained fully functional component technology, and it needs no React or any frameworks.
Practically, React is the older technology, and is irrelevant when you decide to go web components.
 
---
The project was initialized from scratch following [Snowpack Getting Started](https://www.snowpack.dev/tutorials/getting-started)
[Almost no config Snowpack + React + TS](https://dev.to/kojikanao/almost-no-config-snowpack-react-ts-5aac) is quite useful, too.
A Snowpack React/Typescript project could be created with [npx create-snowpack-app michelle14sp --template @snowpack/app-template-react-typescript](https://github.com/snowpackjs/snowpack/tree/main/create-snowpack-app/cli) too; see [Creating a TypeScript React application using Snowpack](https://youtu.be/gjFDiaR3P5w).

After installing the runtime packages and development tools,
I created a minimal *index.html* with Visual Studio Code's ! emmet macro.
I added the root element for React machinery, and added the script module
`<script type="module" src="index.js"></script>` importing *index.js*, since
*index.tsx* compiles to index.js. 
TS and TSX transpilation support is included in Snowpack, no need for any configuration.
But, this embedded TS support simply removes types but gives no error messages. Visual Studio Code with *tsconfig.json* gives errors but not the *snowpack dev*
So, to get compilation errors from snowpack dev server, too, [@snowpack/plugin-typescript](https://www.npmjs.com/package/@snowpack/plugin-typescript) has to be installed and configured as plugin.

Other useful sources to learn and reference:
- [Stefan Baumgartner's TypeScript and React](https://fettblog.eu/typescript-react/) is brutally elegant and in itself it is a reason to pick React. Read his articles before doing anything in React.
- [Jeff Herrington YouTube Channel](https://www.youtube.com/watch?v=Cos-ctPX5hw)  has Tons of Great Information

---
## Project Initialization Steps

- **npm init** to create package.json
- **npm i bootstrap react react-dom** to install the React runtime libraries
- **npm i -D snowpack @snowpack/plugin-typescript typescript @types/node @types/react @types/react-dom** to install the development tools.
- **npx tsc --init** to create *tsconfig.json*
- **npx snowpack init** to create *snowpack.config.js* Add @snowpack/plugin-typescript to the plugin
section in snowpack.config.js like so `plugins: ["@snowpack/plugin-typescript"],` This will add compilation typechecking to the dev server.
This is the reason *create-snowpack-app --template @snowpack/app-template-react-typescript* automatically installs and enables the typescript plugin. 

The next step is to enable [ESLint](https://andrebnassis.medium.com/setting-eslint-on-a-react-typescript-project-2021-1190a43ffba) for the project to be able to execute
fixing sigle quotes and trailing semicolons.
- **npm i -D eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser** 
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
You can use either *.eslintignore* to exclude the *build* folder created by snowpack build command or
`"ignorePatterns": ["/build/*"],` in *.eslintrc.json*

Two scripts were added to package.json:
- "lint" : "npx eslint src/" run it as **npm run lint**
- "fix" : "npx eslint src/ --fix" for **npm run fix**
Both works recursively under the src folders nicely.

