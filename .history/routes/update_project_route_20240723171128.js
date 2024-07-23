const express = require("express");
const router = express.Router();
const updateTask = require("../controllers/updateTask");

router.put("/:id", async (req, res) => {
  const taskId = parseInt(req.params.id);
  if (!taskId || isNaN(taskId)) {
    return res.status(400).json({ error: "Invalid Task ID" });
  }

  try {
    const updated = await updateTask(taskId, req.body);
    if (!updated) {
      return res
        .status(404)
        .json({ error: "Task not found or no changes made" });
    }
    res.json({ message: "Task updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating Task" });
  }
});

module.exports = router;
