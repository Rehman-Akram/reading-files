const mongoose = require('mongoose')
const { db } = require('../config')

const mongoUri = db.MONGO_URI


const connectDb = async () => mongoose.createConnection(mongoUri)
const disconnectDb = async () => mongoose.disconnect()
module.exports = {connectDb, disconnectDb}