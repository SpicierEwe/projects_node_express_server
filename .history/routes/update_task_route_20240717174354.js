const express = require("express");
const router = express.Router();
const updateEmployeeId = require("../controllers/updateEmployee");

router.put("/:id", async (req, res) => {
  const employeeId = parseInt(req.params.id);
  if (!employeeId || isNaN(employeeId)) {
    return res.status(400).json({ error: "Invalid employee ID" });
  }

  try {
    const updated = await updateEmployeeId(employeeId, req.body);
    if (!updated) {
      return res
        .status(404)
        .json({ error: "Employee not found or no changes made" });
    }
    res.json({ message: "employee updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating employee" });
  }
});

module.exports = router;
