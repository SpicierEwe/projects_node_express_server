const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes

// Import route files
const createtaskRouter = require("./routes/create_task_route");
const getAlltasksRouter = require("./routes/get_all_tasks_route");
const gettaskByIdRouter = require("./routes/get_task_by_id_route");
const updatetaskRouter = require("./routes/update_task_route");
const deletetaskRouter = require("./routes/delete_task_route");

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./api_documentation/documentation.html"));
});

app.use("/tasks", createtaskRouter);
app.use("/tasks", getAlltasksRouter);
app.use("/tasks", gettaskByIdRouter);
app.use("/tasks", updatetaskRouter);
app.use("/tasks", deletetaskRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
