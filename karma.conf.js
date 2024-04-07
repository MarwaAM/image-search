/* eslint-disable @typescript-eslint/no-require-imports */
// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    singleRun: true,
    client: {
      jasmine: {
        random: false
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    preprocessors: {
      './src/**/*.ts': ['coverage']
    },
    port: 9876,
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/image-search'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    browsers: ['Chrome', 'ChromeCI'],
    customLaunchers: {
      ChromeCI: {
        base: 'ChromeHeadless',
        // flags: ['--no-sandbox']
      }
    },
    browserDisconnectTimeout: 30000,
    browserDisconnectTolerance: 3,
    browserNoActivityTimeout: 60000,
    reporters: ['progress', 'kjhtml'],
    colors: true,
    restartOnFileChange: true
  });
};
