const express = require("express");
const router = express.Router();
const getAllEvents = require("../controllers/getAllEvents");

router.get("/events", async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Error fetching events" });
  }
});

module.exports = router;
