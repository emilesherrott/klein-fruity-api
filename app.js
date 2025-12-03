const express = require('express')
const cors = require('cors')
const app = express()
const fruitsRouter = require("./routes/fruits")
const logger = require("./logger")

app.use(cors())
app.use(logger)
app.use(express.json())

app.get('/', (req, res) => {
  res.send("Welcome to the FruityAPI")
})

app.use("/fruits", fruitsRouter)



module.exports = app