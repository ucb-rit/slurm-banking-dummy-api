'use strict';

var utils = require('../utils/writer.js');
var Projects = require('../service/ProjectsService');

module.exports.projectInfoByName = function projectInfoByName (req, res, next) {
  var project = req.swagger.params['project'].value;
  Projects.projectInfoByName(project)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
