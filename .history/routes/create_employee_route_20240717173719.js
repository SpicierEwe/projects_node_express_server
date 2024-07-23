const express = require("express");
const router = express.Router();
const createEmployee = require("../controllers/createEmployee");

router.post("/", async (req, res) => {
  try {
    const eventId = await createEmployee(req.body);
    res
      .status(201)
      .json({ id: eventId, message: "Employee created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating Employee" });
  }
});

module.exports = router;
