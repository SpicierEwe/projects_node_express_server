const express = require("express");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import CRUD functions
const {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
} = require("./database"); // Adjust path as necessary

// Routes

// Home route
app.get("/", (req, res) => {
  const path = require("path");
});

// Route to create a new event
app.post("/events", async (req, res) => {
  try {
    const eventId = await createEvent(req.body);
    res
      .status(201)
      .json({ id: eventId, message: "Event created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating event" });
  }
});

// Route to get all events
app.get("/events", async (req, res) => {
  try {
    const events = await getAllEvents();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Error fetching events" });
  }
});

// Route to get a specific event by ID
app.get("/events/:id", async (req, res) => {
  const eventId = parseInt(req.params.id);
  if (!eventId || isNaN(eventId)) {
    return res.status(400).json({ error: "Invalid event ID" });
  }

  try {
    const event = await getEventById(eventId);
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: "Error fetching event" });
  }
});

// Route to update an event by ID
app.put("/events/:id", async (req, res) => {
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

// Route to delete an event by ID
app.delete("/events/:id", async (req, res) => {
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

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
