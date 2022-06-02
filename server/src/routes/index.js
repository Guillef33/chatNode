const { Router } = require('express')
const router = Router();

router.get("/", (req, res) => {
  // res.send("Hello World!");
  const data = {
      "name": "Carlos",
      "website": "www.carlos.com"
  }
  res.json(data);
});

module.exports = router;