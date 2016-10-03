var express 					= require('express');
var router 						= express.Router();
var constants					= require('../scripts/constants');

var apps 						= require(constants.paths.controllers + '/api/application');
var auth 						= require(constants.paths.controllers + '/api/auth');
var users 						= require(constants.paths.controllers + '/api/users');
var fileupload					= require(constants.paths.controllers + '/api/fileupload');
var groups					    = require(constants.paths.controllers + '/api/groups');
var positions                   = require(constants.paths.controllers + '/api/positions');
//var candidates                  = require(constants.paths.controllers + '/api/positions');

router.post('/api/v1/login', auth.login);
router.get('/api/v1/app/info', apps.info);

/*
 * Routes that can be accessed only by authenticated & authorized users
 */
 router.get('/api/v1/secure/admin/users', users.getAll);
 router.get('/api/v1/secure/admin/users/:id', users.getOneById);
 router.post('/api/v1/secure/admin/users/', users.create);
 router.put('/api/v1/secure/admin/users/:id', users.updateById);
 router.delete('/api/v1/secure/admin/users/:id', users.deleteById);
 router.get('/api/v1/secure/admin/users/email/:email', users.getByEmail);
 router.get('/api/v1/secure/admin/users/findAll/data', users.getAllUsers);
 router.get('/api/v1/secure/admin/users/find/find', users.getWithQuery);

//Route for file upload
router.post('/api/v1/upload/:entity',fileupload.create);
router.post('/api/v1/multiupload/:entity',fileupload.create);

// List of service routes for groups
router.get('/api/v1/secure/admin/groups', groups.getAll);
router.get('/api/v1/secure/admin/groups/:id', groups.getOneById);
router.post('/api/v1/secure/admin/groups', groups.create);
router.put('/api/v1/secure/admin/groups/:id', groups.updateById);
router.delete('/api/v1/secure/admin/groups/:id', groups.deleteById);

// List of service routes for positions
router.get('/api/v1/secure/positions', positions.getAll);
router.post('/api/v1/secure/positions', positions.create);
router.get('/api/v1/secure/positions/:id', positions.getCandidatesById);
// List of service routes for candidates
//router.get('/api/v1/secure/candidates/:id', candidates.getAllByPositionId);

module.exports = router;
