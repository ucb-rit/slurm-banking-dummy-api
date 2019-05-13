'use strict';


/**
 * Project info by project name
 *
 * project String The name of the project
 * returns Projects
 **/
exports.projectInfoByName = function(project) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

