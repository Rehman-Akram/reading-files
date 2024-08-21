// worker.js
const fileProcessingQueue = require('../queues/file-processing.queue');
const fileService = require('../modules/files/services/file.service')
const { Readable } = require('stream');

// Making readable stream
function bufferToStream(buffer) {
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null); // Signal the end of the stream
    return stream;
}

fileProcessingQueue.process(async (job) => {
    try {
        const { file } = job.data;
        const fileBuffer = Buffer.from(file.buffer.data)
        const readableStream = bufferToStream(fileBuffer)
        
        const fileRead = await fileService.readFile(readableStream)
        console.log('file content which is read', fileRead)
        console.log('file read in processer')
    } catch (error) {
        console.error('Error while processing file', error)
        throw error
    }
});

console.log('Worker is running...');