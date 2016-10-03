'use strict';

var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

var candidateSchema = require('./candidates');

var positionSchema = new mongoose.Schema({
        positionId                    : String,
        jobTitle                      : String,
        requestor                     : String,
        status                        : {type: String, default: 'Open'},
        validTill                     : Date,
        location                      : String,
        /*selectedCandidate           : type: [{ type: Schema.Types.ObjectId, ref: 'candidate' }]*/
        jobDescription                : String,
        candidate					  : [{
            candid      			  : {type: Schema.Types.ObjectId, ref: 'candidates'}           
        }]
	});

module.exports = mongoose.model('positions', positionSchema);