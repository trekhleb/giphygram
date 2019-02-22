# GiphyGram App

[![Build Status](https://travis-ci.org/trekhleb/giphygram.svg?branch=master)](https://travis-ci.org/trekhleb/giphygram)
[![codecov](https://codecov.io/gh/trekhleb/giphygram/branch/master/graph/badge.svg)](https://codecov.io/gh/trekhleb/giphygram)

[▶︎ Launch Demo](https://trekhleb.github.io/giphygram/)

> This project is a front-end React application that serves a sole purpose of searching GIF images on [GIHPY.com](https://giphy.com/) using GIPHY [Search API](https://developers.giphy.com/docs/#search-endpoint). The project is implemented using **React** (as a main UI library), **Redux** (for state management), **React Router** (to establish a possibility to extend the application with new internal routes and pages) and **Bootstrap 4** (as a main styling framework).

## Launching the Project

[▶︎ Launch Demo Right in Your Browser](https://trekhleb.github.io/giphygram/) (powered by GitHub Pages)

If you want to launch this project locally please clone/checkout this project to your local folder and then you can run:

```bash
npm start
```

This command runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser locally.

The page will reload if you make edits. You will also see any _lint errors_ in the console.

## Running Tests

To launch project tests you need to run:

```bash
npm test
```

This command launches the test runner in the interactive watch mode.

## Building the Project

To create a production ready version of the project you may run: 

```bash
npm run build
```

This command builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. The app is ready to be deployed!

## Deploying the Project

For demo purpose the deployment of this project is done using [GitHub pages](https://pages.github.com/) and [gh-pages](https://www.npmjs.com/package/gh-pages) npm module in particular. You may deploy the project by making sure that you have `gh-pages` branch in your fork on GitHub and by running:

```bash
npm run deploy
```

This command will create a production build of the project and will commit and push the contents of `build` folder to the `gh-pages` branch. Once this branch is set up as a target branch for GitHub pages you'll be able to see project demo similar to the [existing one](https://trekhleb.github.io/giphygram/).

## Project Continuous Integration

Current project is integrated with [Travis](https://travis-ci.org/trekhleb/giphygram) and [Codecov](https://codecov.io/gh/trekhleb/giphygram) services. Travis service launches project build and tests for every new commit and pull request to make sure that things are not broken. Codecov service reports code coverage percentage to see how reliable and stable the process of development is. 

## ToDo

This list contains the next steps for further project development that have not been completed yet because of limited time that was dedicated to this project.

- [x] Reset search results by clicking on reset button.
- [x] Increase code coverage closer to 100% to increase code stability.
- [x] Add multi-environment support using environment variables.
- [ ] Switch to 3-columns views automatically on wide screens.
- [ ] Reflect search params (query and offsets) in the URL to be able to send the link to a friend with predefined search.
- [ ] Implement HTTP requests error handling.
- [ ] Optimize huge amount of GIFs (by either using smaller or downsampled or still GIF images) to make it easier for the browser to render them.
- [ ] Show most trending GIFs on the home page.
