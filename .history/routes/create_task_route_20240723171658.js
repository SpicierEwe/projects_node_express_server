const express = require("express");
const router = express.Router();
const createProject = require("../controllers/createProject");

router.post("/", async (req, res) => {
  try {
    const eventId = await createTask(req.body);
    res
      .status(201)
      .json({ id: eventId, message: "Project created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating Project" });
  }
});

module.exports = router;
