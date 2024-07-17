const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import CRUD functions
const createEvent = require("./controllers/createEvent");
const getAllEvents = require("./controllers/getAllEvents");
const getEventById = require("./controllers/getEventById");
const updateEvent = require("./controllers/updateEvent");
const deleteEvent = require("./controllers/deleteEvent");

// Routes

// Import route files
const createEventRouter = require("./routes/create_employee_route");
const getAllEventsRouter = require("./routes/get_all_employees_route");
const getEventByIdRouter = require("./routes/get_employee_by_id_route");
const updateEventRouter = require("./routes/update_event_route");
const deleteEventRouter = require("./routes/delete_employee_route");

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./api_documentation/documentation.html"));
});

app.use("/events", createEventRouter);
app.use("/events", getAllEventsRouter);
app.use("/events", getEventByIdRouter);
app.use("/events", updateEventRouter);
app.use("/events", deleteEventRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
