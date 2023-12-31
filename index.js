const express = require("express");
const cors = require("cors");
const route = require("./src/routes");

const db = require("./src/config/db");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

//connect db
db.connect();

// routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
