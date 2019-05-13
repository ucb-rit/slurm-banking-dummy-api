'use strict';

var utils = require('../utils/writer.js');
var Usage = require('../service/UsageService');

module.exports.userProjectUsage = function userProjectUsage (req, res, next) {
  var username = req.swagger.params['username'].value;
  var project = req.swagger.params['project'].value;
  Usage.userProjectUsage(username,project)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userProjectUsageDeduct = function userProjectUsageDeduct (req, res, next) {
  var username = req.swagger.params['username'].value;
  var project = req.swagger.params['project'].value;
  var amount = req.swagger.params['amount'].value;
  Usage.userProjectUsageDeduct(username,project,amount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userProjectUsageRefund = function userProjectUsageRefund (req, res, next) {
  var username = req.swagger.params['username'].value;
  var project = req.swagger.params['project'].value;
  var amount = req.swagger.params['amount'].value;
  Usage.userProjectUsageRefund(username,project,amount)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
