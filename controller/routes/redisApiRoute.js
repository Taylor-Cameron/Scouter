/* eslint new-cap: ["error", { "capIsNewExceptionPattern": "^express\.." }]*/
const express = require('express');
const router = express.Router();
const cController = require('../cController');

router.get('*', cController.render_redisData);

module.exports = router;
