const express = require('express')
const path = require("path");

const app = express()

const port = 8080

app.set("port", port);


app.use(express.static(path.join(__dirname, "public"), {maxAge: '1d'}));


app.listen(port, () =>
  console.log("Server on port " + app.get("port"))
);