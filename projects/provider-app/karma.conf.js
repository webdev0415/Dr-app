// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

if (process.env.TESTLOCAL === 'true') {
  process.env.CHROME_BIN = require('puppeteer').executablePath();
  process.env.CHROMIUM_BIN = require('puppeteer').executablePath();

  module.exports = function (config) {
    config.set({
      captureTimeout: 210000,
      browserDisconnectTolerance: 8,
      browserDisconnectTimeout: 100000,
      browserNoActivityTimeout: 210000,
      basePath: '../..',
      proxies:  {
        '/DoctorApp/assets/': '/assets/'
      },
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-mocha-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma'),
        require('karma-spec-reporter')
      ],
      client: {
        clearContext: true, // leave Jasmine Spec Runner output visible in browser
        jasmine: {
          stopOnFailure: true,
          failFast: true,
          timeoutInterval: 10000,
          random: true
        }
      },
      coverageIstanbulReporter: {
        reports: ['html'],
        fixWebpackSourcePaths: true,
        skipFilesWithNoCoverage: true
      },
      angularCli: {
        environment: 'local'
      },
      reporters: ['mocha'],
      mochaReporter: {
        ignoreSkipped: true,
      },
      port: 9876,
      colors: true,
      logLevel: config.DEBUG, // pass log level from commandline
      autoWatch: true,
      browsers: [
        'ChromeHeadlessNoSandbox'
      ],
      customLaunchers: {
        ChromeHeadlessNoSandbox: {
          base: 'ChromeHeadless',
          flags: [
            '--disable-gpu',
            '--no-sandbox',
            '--disable-translate',
            '--disable-extensions'
          ]
        }
      },
      singleRun: false
    });
  };
} else { // gitlab config
  process.env.CHROME_BIN = require('puppeteer').executablePath();
  process.env.CHROMIUM_BIN = require('puppeteer').executablePath();

  module.exports = function (config) {
    config.set({
      captureTimeout: 210000,
      browserDisconnectTolerance: 8,
      browserDisconnectTimeout: 100000,
      browserNoActivityTimeout: 210000,
      basePath: '../..',
      proxies:  {
        '/DoctorApp/assets/': '/assets/'
      },
      frameworks: ['jasmine', '@angular-devkit/build-angular'],
      plugins: [
        require('karma-jasmine'),
        require('karma-chrome-launcher'),
        require('karma-jasmine-html-reporter'),
        require('karma-mocha-reporter'),
        require('karma-coverage-istanbul-reporter'),
        require('@angular-devkit/build-angular/plugins/karma'),
        require('karma-spec-reporter')
      ],
      client: {
        clearContext: true, // leave Jasmine Spec Runner output visible in browser
        jasmine: {
          stopOnFailure: true,
          failFast: true,
          timeoutInterval: 10000,
          // random: false
        }
      },
      coverageIstanbulReporter: {
        reports: ['text-summary'],
        fixWebpackSourcePaths: true
      },
      angularCli: {
        environment: 'dev'
      },
      reporters: ['mocha'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_DISABLED, // pass log level from commandline
      autoWatch: false,
      //  browsers: ['ChromiumHeadless', 'Chromium'],
      browsers: [
        'ChromeHeadlessNoSandbox'
      ],
      customLaunchers: {
        ChromeHeadlessNoSandbox: {
          base: 'ChromeHeadless',
          flags: [
            '--disable-gpu',
            '--no-sandbox',
            '--disable-translate',
            '--disable-extensions'
          ]
        }
      },
      singleRun: true
    });
  };
}
