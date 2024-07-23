const express = require("express");
const router = express.Router();
const getTaskById = require("../controllers/getTaskById");

router.get("/:id", async (req, res) => {
  const taskId = parseInt(req.params.id);
  if (!taskId || isNaN(taskId)) {
    return res.status(400).json({ error: "Invalid proejct ID" });
  }

  try {
    const task = await getTaskById(taskId);
    if (!task) {
      return res.status(404).json({ error: "proejct not found : " + taskId });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: "Error fetching project : " + taskId });
  }
});

module.exports = router;
