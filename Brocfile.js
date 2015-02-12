/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');
var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// Semantic-UI
app.import({
  development: "bower_components/semantic-ui/dist/semantic.css",
  production: "bower_components/semantic-ui/dist/semantic.min.css"
});

app.import({
  development: "bower_components/semantic-ui/dist/semantic.js",
  production: "bower_components/semantic-ui/dist/semantic.min.js"
});

var semanticFonts = pickFiles('bower_components/semantic-ui/dist/themes/default/assets/fonts', {
  srcDir: '/', 
  files: ['**/*'],
  destDir: '/assets/themes/default/assets/fonts'
});

// AWS SDK
app.import({
  development: "bower_components/aws-sdk-js/dist/aws-sdk.js",
  production: "bower_components/aws-sdk-js/dist/aws-sdk.min.js"
});

module.exports = mergeTrees([app.toTree(), semanticFonts]);
