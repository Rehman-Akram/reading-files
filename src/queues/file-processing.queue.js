const Queue = require('bull');
const redisConfig = require('../../config').redis
const fileQueue = new Queue('file-processing', {
    redis: redisConfig
});

module.exports = fileQueue;
