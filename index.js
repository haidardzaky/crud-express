// -----------------------------------------------------------------------------
// IMPORT MODULES

const express = require("express")
const bodyParser = require("body-parser")

// -----------------------------------------------------------------------------
// CONFIGURE

const app = express()
const HOST = "localhost"
const PORT = 3002

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())


// -----------------------------------------------------------------------------


const routePlayers = require("./routes/index")


app.use("/players", routePlayers)

// -----------------------------------------------------------------------------
// RUN THE SERVER APP WITH EXPRESS

app.listen(PORT, HOST, () => {
  console.log("Server is listening on localhost:3002")
})
