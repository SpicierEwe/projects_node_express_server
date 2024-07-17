const express = require("express");
const router = express.Router();
const createEvent = require("../controllers/createEvent");

router.post("/", async (req, res) => {
  try {
    const eventId = await createEvent(req.body);
    res
      .status(201)
      .json({ id: eventId, message: "Employee created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating event" });
  }
});

module.exports = router;
