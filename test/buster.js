/*global module:false */

var config = module.exports;

config["My tests"] = {
  rootPath: "../",
  environment: "browser",
  sources: [
    "lib/grid.js"
  ],
  tests: [
    "test/*-test.js"
  ]
};
