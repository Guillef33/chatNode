const { Router } = require("express");
const router = Router();

const movies = require("../sample.json");

router.get("/", (req, res) => {
  res.json(movies);
});

router.post("/", (req, res) => {
  console.log(req.body);
//   const { director, year, rating } = req.body
  console.log(req.body)
  res.send("recibido");
});

module.exports = router;
