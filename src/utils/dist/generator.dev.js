"use strict";

module.exports = function (component, framework, options) {
  try {
    var template = require("../templates/".concat(framework, "/").concat(component, ".js"));

    return template(options);
  } catch (err) {
    throw new Error("Composant ou framework non pris en charge");
  }
};