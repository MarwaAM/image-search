# ImageSearch

Simple Project built with Angular. Inspired by [codementor](https://www.codementor.io/projects/web/image-search-gallery-au63vo9tfr)

## Run on live data
* Obtain an API key from [Unsplash API](https://unsplash.com/developers)
* add `environment.dev.ts` file in `environments` folder with this content  
`export const environment = {
    production: false,
    API_KEY: '<YOUR_API_KEY>'
}`

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.