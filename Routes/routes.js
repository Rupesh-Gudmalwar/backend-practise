const express = require("express");
const router = express.Router();

const Model = require("../Model/model");

router.get("/first", (req, res) => {
  res.send("this is first router based api");
});

router.get("/first/:id", (req, res) => {
  res.send(`Route with id ${req.params.id}`);
});

router.post("/post", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

router.post("/save", async (req, res) => {
  const data = new Model({
    name: req.body.name,
    age: req.body.age,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get("/find", async (req, res) => {
  try {
    const allData = await Model.find();
    res.status(200).json(allData);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
