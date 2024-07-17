const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Routes

// Import route files
const createEmployeeRouter = require("./routes/create_employee_route");
const getAllEmployeesRouter = require("./routes/get_all_employees_route");
const getEmployeeByIdRouter = require("./routes/get_employee_by_id_route");
const updateEmployeeRouter = require("./routes/update_employee_route");
const deleteEmployeeRouter = require("./routes/delete_employee_route");

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./api_documentation/documentation.html"));
});

app.use("/Employees", createEmployeeRouter);
app.use("/Employees", getAllEmployeesRouter);
app.use("/Employees", getEmployeeByIdRouter);
app.use("/Employees", updateEmployeeRouter);
app.use("/Employees", deleteEmployeeRouter);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
