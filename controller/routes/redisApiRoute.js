/* eslint new-cap: ["error", { "capIsNewExceptionPattern": "^express\.." }]*/
const express = require('express');
const router = express.Router();
const cController = require('../cController');

// Used for testing
// TODO add testing
router.get('adminbackdoortest', cController.render_redisData);

// Any request hitting express gets same data back (other than routes for testing)
router.get('*', cController.render_redisData);

module.exports = router;
