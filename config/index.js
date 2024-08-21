require('dotenv').config()

module.exports = {
  db: {
    MONGO_URI: process.env.MONDO_DB_URI
  },
  redis: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT)
  },
  port: process.env.PORT,
  get(key) {
    return process.env[key];
  },
}