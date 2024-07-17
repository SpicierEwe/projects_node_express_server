const express = require("express");
const router = express.Router();
const deleteEmployee = require("../controllers/deleteEmployee");

router.delete("/:id", async (req, res) => {
  const eventId = parseInt(req.params.id);
  if (!eventId || isNaN(eventId)) {
    return res.status(400).json({ error: "Invalid event ID" });
  }

  try {
    const deleted = await deleteEvent(eventId);
    if (!deleted) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting event" });
  }
});

module.exports = router;
