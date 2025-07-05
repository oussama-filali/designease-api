"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var generator = require('../utils/generator');

exports.generate = function (req, res) {
  var _req$body = req.body,
      component = _req$body.component,
      framework = _req$body.framework,
      options = _objectWithoutProperties(_req$body, ["component", "framework"]);

  try {
    var code = generator(component, framework, options);
    res.json({
      code: code
    });
  } catch (err) {
    res.status(400).json({
      error: err.message
    });
  }
};