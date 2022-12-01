const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("this is from videos routes");
  res.status(200).json({ message: "It.s working get from /videos" });
});
router.post("/", (req, res, next) => {
  console.log("this is from videos routes");
  res.status(200).json({ message: "It.s working post from /videos" });
});
router.post("/:id", (req, res, next) => {
  const id = req.params.id;
  if (id === "special") {
    res
      .status(200)
      .json({
        message: "It.s working post from /videos\n you discovered special id",
        id: id,
      });
  } else {
    res
      .status(200)
      .json({
        message: "It.s working post from /videos \na id is discovered ",
      });
  }
  console.log("this is from videos routes");
});

module.exports = router;
