const express = require("express");
const router = express.Router();
const getEventById = require("../controllers/getEventById");

router.get("/:id", async (req, res) => {
  const eventId = parseInt(req.params.id);
  if (!eventId || isNaN(eventId)) {
    return res.status(400).json({ error: "Invalid event ID" });
  }

  try {
    const event = await getEventById(eventId);
    if (!event) {
      return res.status(404).json({ error: "Event not found : " + eventId });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: "Error fetching event : " + eventId });
  }
});

module.exports = router;
