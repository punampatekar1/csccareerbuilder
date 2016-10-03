'use strict';

var constants         = require('../../scripts/constants');
var dataService     = require(constants.paths.services + '/candidates');

var controller = {}

controller.getAllByPositionId     = getAllByPositionId;

module.exports = controller;

function getAllByPositionId(req,res){
  dataService.getAllByPositionId(req.params.id)
    .then(function(list){
        if (list){
            res.send(list);
        }else {
            res.status(404).send('Candidate List not found');
        }
    })
    .catch(function (err){
        console.log("exception" + err);
        res.status(500).send(err);
    });
}