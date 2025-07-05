"use strict";

module.exports = function (req, res, next) {
  var key = req.headers['x-api-key'];

  if (!key || key !== process.env.API_KEY) {
    return res.status(403).json({
      error: 'Clé API invalide'
    });
  }

  next();
};