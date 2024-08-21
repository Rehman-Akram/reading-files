// ecosystem.config.js
module.exports = {
    apps: [
        {
            name: 'read-file-express-server',
            script: 'app.js', // Your Express server entry file
            instances: 1, // Number of instances
            autorestart: true,
            watch: false,
        },
        {
            name: 'file-processing-worker',
            script: 'src/queues-processers/file-processing.worker.js', // Your Bull worker entry file
            instances: 1, // Number of instances
            autorestart: true,
            watch: false,
        }
    ]
};
