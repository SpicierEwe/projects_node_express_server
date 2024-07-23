const express = require("express");
const router = express.Router();
const getAllTasks = require("../controllers/getAllTasks");

router.get("/", async (req, res) => {
  try {
    const tasls = await getAllTasks();
    res.json(tasls);
  } catch (error) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
});

module.exports = router;
