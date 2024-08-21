const express = require('express');
const router = express.Router();

// Import routes
const fileRoutes = require('../src/modules/files/routes/file.routes.js');

// Add your route modules here
router.use('/files', fileRoutes);

module.exports = router;