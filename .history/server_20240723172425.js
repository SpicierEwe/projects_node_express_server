const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes

// Import route files
const createProjectRouter = require("./routes/create_project_route");
const getAllprojectsRouter = require("./routes/get_all_projects_route");
const getprojectByIdRouter = require("./routes/get_project_by_id_route");
const updateprojectRouter = require("./routes/update_project_route");
const deleteprojectRouter = require("./routes/delete_project_route");

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./api_documentation/documentation.html"));
});

app.use("/projects", createprojectRouter);
app.use("/projects", getAllprojectsRouter);
app.use("/projects", getprojectByIdRouter);
app.use("/projects", updateprojectRouter);
app.use("/projects", deleteprojectRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
