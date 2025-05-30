var customLaunchers = require('./saucelabs-browsers');

module.exports = function(config) {
    config.set({
        frameworks: ['polyfill', 'mocha', 'browserify'],
        polyfill: ['es6'],
        files: [
          'test/*.js'
        ],

        preprocessors: {
            'test/*.js': ['browserify']
        },

        browserify: {
            debug: true
        },

        port: 9876,

        colors: false,

        // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        autoWatch: true,

        singleRun: true,

        sauceLabs: {
            startConnect: true,
            testName: 'ProgressBar.js',
            build: process.env.TRAVIS_BUILD_NUMBER || 'manual',
            tunnelIdentifier: process.env.TRAVIS_BUILD_NUMBER,
            recordVideo: true
        },

        customLaunchers: customLaunchers,

        browsers: Object.keys(customLaunchers),

        reporters: ['dots', 'saucelabs'],

        // Timeouts
        browserDisconnectTimeout: 30 * 1000,
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 30 * 1000,
        captureTimeout: 120 * 1000
    });
};
