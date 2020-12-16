# React starter

This is a template for building a new React app. It uses

-   [React](https://reactjs.org/) for buidling the user interface components
-   [Tailwind CSS](https://tailwindcss.com/) for styling the user interface
-   [TypeScript](https://www.typescriptlang.org/) for static type-safety
-   [Babel](https://babeljs.io/) for transpiling TypeScript and polyfilling new and proposed JavaScript features
-   [webpack](https://webpack.js.org/) for bundling your app for distribution

## Why not use create-react-app?

React comes with a [utility](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) called `create-react-app`. It gives you a huge head start on your project and is especially useful if you do not want to worry too much about configurations and dependencies. If you do want to look under the hood and get your hands dirty `npm run eject` lets you do that.

I found myself to be interested in all the kinds of configurations and dependencies that are needed for creating a React app. But ejecting revealed way too much at once. So I started with a very basic React setup and kept working on it during development. It gives me the advantage that I know exactly what is in it and what I can configure where.

This template might not prove especially useful to others. But just in case it does I make it public.

## Installation

To set up your workspace for both developing and building the project,

1. Install [Node.js](https://nodejs.dev/) (preferably with [Node Version Manager](https://github.com/nvm-sh/nvm) that reads `/.nvmrc`)
2. Clone this repository
3. In the project's directory, install the dependencies with `npm ci`
4. Fill in your name, version and repository in `/package.json`

## Developing

To start with developing the project,

1. [Install the project](#installation)
2. [Configure](#configuring) your environment variables
3. Start the development server with `npm run dev:start`

The development server will host your built application at http://localhost:8080. It will automatically rebuild your app when files change. It supports [webpack's hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) and [React Hot Loader](https://github.com/gaearon/react-hot-loader) to avoid full page refreshes. You will have to restart the development server after changing config files that are only loaded when starting the development server.

## Building

To build the project for production,

1. [Install the project](#installation)
2. [Configure](#configuring) your environment variables
3. Start the build process with `npm run build`

The finished build will be output at `/dist`.

## Publishing

You can directly [build](#building) and serve the finished build on your current machine with `npm run start`.

To publish the app on your http server of choice, build the app and upload all files from `/dist`.

## Validating

To validate that all files follow the configured style-guide and dependencies are up to date, run `npm run validate`.

## Configuring

You must configure your builds by setting the [required environment variables](#required-environment-variables). You can also configure your builds further with the [optional enivornment variables](#optional-environment-variables). Your set values will be available at build and runtime from `process.env` ([learn more](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_env)).

### Required environment variables

You **must** set the following environment variables to configure your builds:

| Key            | Description               | Type     | Allowed values\* |
| -------------- | ------------------------- | -------- | ---------------- |
| `API_BASE_URL` | URL to the backend server | `string` | `/.+/`           |

(\*) regular expression or comparison statement

### Optional environment variables

You **can** set the following environment variables to configure your builds:

| Key           | Description                                                         | Type     | Allowed values\* | Default value |
| ------------- | ------------------------------------------------------------------- | -------- | ---------------- | ------------- |
| `PUBLIC_PATH` | [Webpack's public path](https://webpack.js.org/guides/public-path/) | `string` | `/^\//u`         | `"/"`         |

(\*) regular expression or comparison statement

### Using a `.env` file

If present, environment variables are read from `/.env`. E.g., your `/.env` could look like this:

```env
API_BASE_URL=https://foo.bar
```
