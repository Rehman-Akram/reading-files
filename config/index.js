require('dotenv').config()

module.exports = {
  db: {
    MONGO_URI: process.env.MONDO_DB_URI
  },
  port: process.env.PORT,
  get(key) {
    return process.env[key];
  },
}