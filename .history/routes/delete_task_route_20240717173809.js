const express = require("express");
const router = express.Router();
const deleteEmployee = require("../controllers/deleteEmployee");

router.delete("/:id", async (req, res) => {
  const employeeId = parseInt(req.params.id);
  if (!employeeId || isNaN(employeeId)) {
    return res.status(400).json({ error: "Invalid event ID" });
  }

  try {
    const deleted = await deleteEmployee(employeeId);
    if (!deleted) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting Employee" });
  }
});

module.exports = router;
