'use strict';

var Q               = require('q');
var constants       = require('../scripts/constants');
var model           = require(constants.paths.models +  '/candidates');

// Service method definition -- Begin
var service = {};


service.getAllByPositionId       = getAllByPositionId;

module.exports = service;

function getAllByPositionId(id){
    var deferred = Q.defer();

    model
        .find({ positionId: id })
        .exec(function (err, item) {
            if(err) {
                console.log(err);
                deferred.reject(err);
            }
            else
            {
                deferred.resolve(item);
            }
        }); // end of model

    return deferred.promise;
} // getAllByPositionId method ends

