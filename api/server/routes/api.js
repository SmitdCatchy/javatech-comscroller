var express = require('express');
var router = express.Router();

module.exports = router;

var Module = require('./api/module');
router.use('/module', Module);

var Scene = require('./api/scene');
router.use('/scene', Scene);

var SceneObject = require('./api/object');
router.use('/object', SceneObject);

var Files = require('./api/file');
router.use('/file', Files);
