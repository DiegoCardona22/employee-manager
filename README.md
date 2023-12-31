# Employee Manager App
This project is intended to be used as a template for creating new React applications with Material UI, TypeScript, SASS and more. It also includes a simple Employee Manager App to show how to use the template.

The project was bootstrapped with [Create Vite](https://vitejs.dev/guide) following this [Tutorial](https://dev.to/equimancho/vite-configuracion-para-react-3hf2). Below you will find some information about main features and how to perform common tasks.

## Supported Language Features
This project supports a superset of the latest `JavaScript`/`TypeScript` standard. In addition to [ES6](http://es6-features.org) syntax features, it also supports:
- [Exponentiation Operator](https://github.com/tc39/proposal-exponentiation-operator) (ES2016)
- [Async/await](https://github.com/tc39/proposal-async-await) (ES2017)
- [Object Rest/Spread Properties](https://github.com/tc39/proposal-object-rest-spread) (ES2018)
- [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 4 proposal)
- [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal)
- [TSX](https://www.typescriptlang.org/docs/handbook/jsx.html) and [TypeScript](https://www.typescriptlang.org)

## Core Libraries
- [React 18.2.0](https://reactjs.org) with `React Scripts 5.0.1`
- [SASS 1.65.1](https://sass-lang.com) with [CSS Modules](https://github.com/css-modules/css-modules)
- [MUI 5.14.4](https://mui.com) with `Emotion` styling engine, `Roboto Fonts` and `Material Icons`
- [TypeScript 5.1.6](https://www.typescriptlang.org) with [ES6](http://es6-features.org)
- [I18next 23.4.4](https://react.i18next.com) for internationalization
- [React Router 6.14.2](https://reactrouter.com/) for the routing system

## Code Quality & Performance
- [ESLint 8.46.0](https://eslint.org) with `Airbnb`, `TypeScript`, `React`, `React Hooks` and `Jest` configuration
- [Stylelint 15.10.2](https://stylelint.io) to analyse `CSS`/`SCSS` files
- [React Testing Library 14.0.0](https://testing-library.com/docs/react-testing-library/intro) to test components
- [Web Vitals 2.1.4](https://web.dev/vitals) to meassure performance

## Built-in Settings
- [.editorconfig](https://editorconfig.org) settings to standardize charset, ending of lines and indentation
- [.vscode](https://code.visualstudio.com/docs/getstarted/settings) settings with integrated Chrome Debugger, faster search results and auto-format on save
- [Environment files](https://create-react-app.dev/docs/adding-custom-environment-variables) for `Local`

## Environment Quick Setup
1. Install [NodeJs](https://nodejs.org/es/download)
2. Install [Git](https://git-scm.com/downloads)
3. Install [VS Code](https://code.visualstudio.com/download)
4. Install VS Code recomented extensions:
   * [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)
   * [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   * [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
   * [Icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
   * [MDX](https://marketplace.visualstudio.com/items?itemName=silvenon.mdx)
   * [NpmIntellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
   * [SCSS Formatter](https://marketplace.visualstudio.com/items?itemName=sibiraj-s.vscode-scss-formatter)
   * [SortLines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)
   * [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
5. Install [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) for Google Chrome

## Running & Debugging the application for the first time
1. Open a new [VS Code](https://code.visualstudio.com/download) window:
   - `File` > `New Window`
3. Open a parent folder that will host this project (e.g. `~/Projects`):
   - `File` > `Open Folder`
4. Open a new terminal:
   - `Terminal` > `New Terminal`
5. Clone repo:
   - `git clone https://github.com/DiegoCardona22/employee-manager`
6. Install project dependencies:
   - `cd employee-manager`
   - `npm install` to install dependencies
7. Restart VS Code to refresh TypeScript Intellisense, otherwise you might see errors in the editor:
   - Close VS Code
   - Open a new VS Code window
   - Open the folder where the project was cloned
8. Set .env-local variables:
   - Create a `.env-override` folder inside the project root
   - Create a `.env.local` file inside the `.env-override` folder
   - Add the following variables to the `.env.local` file:
     ```
     VITE_ENV=local
     VITE_API_URL=http://localhost:3001	
     VITE_USE_MOCK=true
     ```
    Is important to set `VITE_USE_MOCK=true` to use the mock API
8. Start the application:
   - Open a new terminal
   - `npm run dev`
9. Start debugging in VS Code:
   - Press `F5` or click on `Run and Debug` > `Green Debug Icon`
   - You can set breakpoints and inspect components in the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Available Scripts
| Command               | Description                                      | Environment File  |
| :---                  | :---                                             | :---             |
| `npm run lint`        | Analyses **JavaSript**/**TypeScript** code       | N/A              |
| `npm run lint:f`      | Try to fix **JavaSript**/**TypeScript** errors   | N/A              |
| `npm run slint`       | Analyses **CSS**/**SCSS** styles                 | N/A              |
| `npm run slint:f`     | Try to fix **CSS**/**SCSS** errors               | N/A              |
| `npm run test`        | Executes Unit Tests outputting to `out/coverage` | .env.local        |
| `npm run dev`         | Runs the App in http://localhost:3000            | .env.local       |
| `npm run build`       | Builds the App to `out/build/production`         | .env.production  |
| `npm run preview`     | Previews the App to `out/build/production`       | .env.production  |

## Project Structure
After cloning, your project should look like this:

```
📦 react-mui-ts-template
├── 📜 .editorconfig                EditorConfig settings
├── 📜 .env                         Variables common to all environments
├── 📜 .eslintignore                Folders and files ignored by ESLint
├── 📜 .eslintrc                    ESLint configuration
├── 📜 .gitignore                   Folders and files ignored by Git
├── 📜 .stylelintrc                 Stylelint configuration
├── 📜 LICENSE                      License information
├── 📜 package-lock.json            Npm dependency tree to recreate node_modules
├── 📜 package.json                 Project dependencies, scripts and more
├── 📜 README.md                    Project documentation
├── 📜 tsconfig.json                TypeScript configuration
├── 📂 .env-override
│   ├── 📜 .env.local               Environment variables for Local
├── 📂 .vscode
│   ├── 📜 extensions.json          Recomended extensions to load in VS Code
│   ├── 📜 launch.json              Launch Chrome against localhost
│   └── 📜 settings.json            Settings for VS Code
└── 📂 src
    ├── 📜 index.tsx                The application entry point
    ├── 📜 react-app-env.d.ts       TypeScript declarations for React App
    ├── 📜 setupTests.ts            Global setup before running tests
    ├── 📂 app
    │   └── 📜 index.tsx            The main App component with routes
    ├── 📂 components
    │   ├── 📜 index.module.scss    Component styles
    │   ├── 📜 index.test.tsx       Jest testing file
    │   └── 📜 index.tsx            Example component definition
    ├── 📂 fonts
    │   └── 📜 material-icons.ttf   Font file for Material Icons
    ├── 📂 lang
    │   ├── 📜 index.ts             i18next configuration
    │   ├── 📜 resources.en.json    Application texts in English
    │   └── 📜 resources.es.json    Application texts in Spanish
    ├── 📂 styles
    │   ├── 📜 _material-icons.scss Material Icons Font
    │   ├── 📜 _reset.scss          Simple CSS reset for consistent styles
    │   └── 📜 main.scss            Main SASS file
    └── 📂 util
        └── 📜 web-vitals.ts        Web Vitals reporting
```
For the project to build, these files must exist with exact filenames:
- `public/index.html` is the page template
- `src/index.tsx` is the TypeScript entry point

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by webpack. You need to put any TypeScript and SCSS files inside `src`, otherwise webpack won’t see them.

Only files inside public can be used from `public/index.html`.

## File extensions
Most of the files you will create in the `src` folder will be **TypeScript**, **TypeScript with React** or **SASS**:
- `.ts`: TypeScript files (Don't use `.js`). Use it for:
  - Utilities. e.g. `arrays.ts`
  - Test of utilities. e.g. `arrays.test.ts
- `.scss`: Superset of CSS (Don't use `.css`). Use it for:
  - Global styles. e.g. `main.css`
  - Component styles. e.g. `HelloWorld/index.module.scss`

## Adding a Stylesheet
This project supports [Sass](https://sass-lang.com/guide) alongside [CSS Modules](https://github.com/css-modules/css-modules):
- `Sass` is CSS with superpowers
- `CSS Modules` scopes CSS by automatically creating a unique **className**

`Sass` supports two syntaxes:
- `.scss`: Is an extension of CSS where every valid CSS is a valid **.scss** as well
- `.sass`: Is an older indented syntax not recommended for use in new **Sass** files

In this project we use the `.scss` syntax.

To express that a component depends on a **.scss module**, you should use the `[name].module.scss` convention:
```tsx
import styles from './index.module.scss';

function MyComponent() {
  return <div className={styles.myClass}>My Component</div>;
}
```

In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all `.scss` files will be concatenated into a single minified `.css` file in the build output.

To share variables between **Sass** files, you can use Sass's [@use](https://sass-lang.com/documentation/at-rules/use) rule. There is a `SASS_PATH` variable in the `.env` file that is used to locate `.scss` files. Supposing that `SASS_PATH='./src/styles'` and that you have `_colors.scss` in that directory, then you can use it like this:
```scss
@use 'colors';

.info {
  color: colors.$primary;
}
```

For information about how to structure a SASS codebase using the **7-1 Pattern** you can read this [article](https://remote.com/blog/how-to-structure-your-sass-project) or take a look to the following [boilerplate](https://github.com/KittyGiraudel/sass-boilerplate).

## Adding Images and Files
With webpack, using static assets like images and files works similarly to `SCSS`.

To reduce the number of requests to the server, importing images that are less than 10,000 bytes returns a data URI instead of a path. This applies to the following file extensions: bmp, gif, jpg, jpeg, and png. You can control the 10,000 byte threshold by setting the `IMAGE_INLINE_SIZE_LIMIT` environment variable as documented in the [advanced configuration](https://create-react-app.dev/docs/advanced-configuration).

```tsx
import logo from './logo.png';

function Header() {
  return <img src={logo} alt="Logo" />;
}
```

## Working Guidelines
- Create reusable components inside the `src/components` folder. Define each component in its own folder with the following structure:
  ```
  ├── 📂 src/components/MyComponent   Component name in PascalCase
      ├── 📜 index.module.cs          Component styles (optional)
      ├── 📜 index.test.tsx           Jest testing file
      └── 📜 index.tsx                Component definition
  ```
- Prefer [Function Components](https://www.robinwieruch.de/react-function-component) over **Class Components**, they offer almost the same: state and lifecycle methods, with the plus they are more lightway, have a sophisticated API and require less code. With the introduction of [React Hooks](https://reactjs.org/docs/hooks-intro.html) it's possible to write your entire application with just functions as React Components:
  ```tsx
  // External imports
  import Box from '@mui/material/Box';
  import { BoxProps } from '@mui/material';
  import { useTranslation } from 'react-i18next';

  // Local imports
  import styles from './index.module.scss';

  // Component props
  export interface MyComponentProps {
    /**
     * The box container styles.
     * See: https://mui.com/material-ui/api/box
     */
    box?: BoxProps
  }

  // Component definition
  function MyComponent({ box } : MyComponentProps) {
    const { t } = useTranslation();

    const defaults = MyComponent.defaultProps;
    const boxProps = { ...defaults.box, ...box } as BoxProps;

    return (
      <Box className={styles.box} {...boxProps}>
        {t('hello-world')}
      </Box>
    );
  }

  // Default props
  MyComponent.defaultProps = {
    box: {
      sx: { background: 'blue' },
    },
  };

  // Default export
  export default MyComponent;
  ```
- Use default `imports` and `exports` when a module only exports a single thing (for example, a component). Named exports are useful for utility modules that export several functions. A module may have at most one default export and as many named exports as you like.
- In general use [Trailing Commas](https://blog.logrocket.com/best-practices-using-trailing-commas-javascript) (except on `JSON` files), many coding styles now recommend using them all the time because they make it easier to add new parameters to your functions or copy/paste properties in arrays and objects and also helps with producing cleaner diff output
- Add your own environment variables to the `.env-override/.env.local` file, this file should not be commited
- Before running or building this application always run linters and unit tests

## Troubleshooting
- **When running `npm run lint` you get this error: "Expected linebreaks to be 'LF' but found 'CRLF'"**
  - This happens because on Windows, Git converts linebreaks from `LF` to `CRLF` when you checkout the code, but esLint is configured to accept valid ending of lines as `LF` (unix style)
  - To avoid Git converting from `LF` to `CRLF`, run the following commands:
    ```shell
    git config --global core.autocrlf false
    git config --global core.eol lf
    git rm --cached -r .
    git reset --hard
    ```
- **On VS Code you get this errors: "JSX element implicitly has type 'any'..."**
  - This happens because your Typescript IntelliSense is not working properly
  - To fix it reload your code editor: `Ctrl + p` > `Developer: Reload Window`

## More Topics
- [Configuring Supported Browsers](https://create-react-app.dev/docs/supported-browsers-features#configuring-supported-browsers)
- [Updating React to New Releases](https://create-react-app.dev/docs/updating-to-new-releases)

## Documentation & Training
- [Official React Documentation](https://es.reactjs.org)
- [React Function Components](https://www.robinwieruch.de/react-function-component)
- [The TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [ES6](http://es6-features.org/#Constants)
- [Sass Basics](https://sass-lang.com/guide)
- [MUI Crash Course](https://www.youtube.com/watch?v=o1chMISeTC0)
- [MUI From Zero to Hero](https://www.youtube.com/playlist?list=PLDxCaNaYIuUlG5ZqoQzFE27CUOoQvOqnQ)
- [MUI Components](https://mui.com/material-ui/react-autocomplete)
- [MUI Templates](https://mui.com/material-ui/getting-started/templates)

## Creator
**Diego Cardona** https://github.com/DiegoCardona22

