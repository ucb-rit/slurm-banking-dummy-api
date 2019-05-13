'use strict';


/**
 * Get a single user's usage on a project
 *
 * username String The username of the user
 * project String The project to query for the user's usage
 * returns ActiveUserProjectLinkUsage
 **/
exports.userProjectUsage = function(username,project) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deduct service units from a user's account
 *
 * username String The username of the user
 * project String The project to deduct usage from
 * amount String The number of service units to deduct (optional)
 * no response value expected for this operation
 **/
exports.userProjectUsageDeduct = function(username,project,amount) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Refund service units to a user's account
 *
 * username String The username of the user
 * project String The project to refund usage from
 * amount String The number of service units to refund (optional)
 * no response value expected for this operation
 **/
exports.userProjectUsageRefund = function(username,project,amount) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

