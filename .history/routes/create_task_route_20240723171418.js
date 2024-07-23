const express = require("express");
const router = express.Router();
const createTask = require("../controllers/createProject");

router.post("/", async (req, res) => {
  try {
    const eventId = await createTask(req.body);
    res.status(201).json({ id: eventId, message: "Task created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating task" });
  }
});

module.exports = router;
