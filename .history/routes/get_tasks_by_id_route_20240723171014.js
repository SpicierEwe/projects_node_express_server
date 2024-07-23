const express = require("express");
const router = express.Router();
const getTaskById = require("../controllers/getTaskById");

router.get("/:id", async (req, res) => {
  const employeeId = parseInt(req.params.id);
  if (!employeeId || isNaN(employeeId)) {
    return res.status(400).json({ error: "Invalid event ID" });
  }

  try {
    const employee = await getTaskById(employeeId);
    if (!employee) {
      return res.status(404).json({ error: "Event not found : " + employeeId });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: "Error fetching employee : " + employeeId });
  }
});

module.exports = router;
