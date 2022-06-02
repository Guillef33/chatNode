const express = require("express");
const app = express();
const port = 8080;
const morgan = require("morgan");

//rotues
app.use(require('./routes/index'))
app.use('/api/movies', require("./routes/movies"));

//settings
app.set("port", process.env.PORT || 8080);
app.set('json spaces', 2)

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(app.get("port"), () => {
  console.log(`Example app listening on port ${app.get("port")}`);
});
