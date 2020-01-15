const express = require("express");
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const { mongoPass } = require("./utils/pass");

const PORT = 5000 || process.env.PORT;

mongoose.connect(
  mongoPass,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => (err ? console.log(err) : console.log("Connection to DB OK"))
);

app.use(express.json());
mongoose.set("useCreateIndex", true);
app.use(routes);

app.listen(PORT, console.log(`Listening on PORT ${PORT}...`));
