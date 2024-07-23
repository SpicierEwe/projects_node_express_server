const express = require("express");
const router = express.Router();
const deleteEmployee = require("../controllers/deleteTask");

router.delete("/:id", async (req, res) => {
  const employeeId = parseInt(req.params.id);
  if (!employeeId || isNaN(employeeId)) {
    return res.status(400).json({ error: "Invalid task ID" });
  }

  try {
    const deleted = await deleteEmployee(employeeId);
    if (!deleted) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting Task" });
  }
});

module.exports = router;
