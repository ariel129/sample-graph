require("dotenv/config");
let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

const api = require("./routes");
let db = require("./application/Models");

let app = express();

// Enable CORS for client requests
const corsOptions = {
  origin: `${process.env.CLIENT_HOST}:${process.env.CLIENT_PORT}`,
  credentials: true,
};

app.use(cors(corsOptions));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// parse requests of content-type - application/json
app.use(bodyParser.json());

// Connecting to the database
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const port = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Server is running"));

// define a route
app.use("/api/v1", api);

// listen for requests
app.listen(port, function () {
  console.log("Running Server on port " + port);
});
