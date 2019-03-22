const router = require("express").Router();

router.get("/profile", (_, res) => {
  res.send({
    id: 1,
    name: "test"
  });
  res.end();
});

module.exports = router;
