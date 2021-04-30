const express = require('express')
const routes = require("./routes");
const bodyParser = require("./core/body-parser");
const dbConnection = require("./core/db_connection");
const cors = require("./core/cors");

const app = express()
const PORT = process.env.PORT || 5000;

dbConnection();
bodyParser(app);
cors(app);
routes(app)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})


