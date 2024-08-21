const express = require('express');
const router = express.Router();
const fileQueue = require('../../../queues/file-processing.queue')
const multer = require('multer')
const upload = multer()

router.post('/read-files', upload.any() ,async (req, res) => {
    if (!req.files || !req.files.length) {
        res.status(400).json({message: 'Please upload some files, no file is uploaded.'})
    }
    req.files.map(file => fileQueue.add({file}))
    res.status(200).json({message: 'files are being read...'})
});

module.exports = router;