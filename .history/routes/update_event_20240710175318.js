const express = require("express");
const router = express.Router();
const updateEvent = require("../controllers/updateEvent");

router.put("/:id", async (req, res) => {
  const eventId = parseInt(req.params.id);
  if (!eventId || isNaN(eventId)) {
    return res.status(400).json({ error: "Invalid event ID" });
  }

  try {
    const updated = await updateEvent(eventId, req.body);
    if (!updated) {
      return res
        .status(404)
        .json({ error: "Event not found or no changes made" });
    }
    res.json({ message: "Event updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error updating event" });
  }
});

module.exports = router;
