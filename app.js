const express = require("express");
const cors = require("cors");
const { port } = require("./config")
const {connectDb, disconnectDb } = require("./database")
//creating express app
const app = express();

//--------Start applying global middlewares ------

// Using cors middleware allowing all routes.
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//--------End of applying global middelwares -------

// Connecting db and on sucessful connection of db start server
connectDb().then(()=> {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
  })
  console.log('MongoDb Connected successfully...')
}, ()=> {
  console.error('Unable to connect with mongo db')
  disconnectDb()
  throw error
})
