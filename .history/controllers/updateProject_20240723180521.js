const pool = require("../config/database");

// Update a project
module.exports = async function updateProject(id, taskData) {
  // Initialize an empty array for query fields and values
  let queryFields = [];
  let queryValues = [];

  // Check which fields are provided and build the query dynamically
  if (taskData.title) {
    queryFields.push("title = ?");
    queryValues.push(taskData.title);
  }
  if (taskData.milestone) {
    queryFields.push("milestone = ?");
    queryValues.push(taskData.milestone);
  }
  if (taskData.priority) {
    queryFields.push("priority = ?");
    queryValues.push(taskData.priority);
  }
  if (taskData.task_status) {
    queryFields.push("task_status = ?");
    queryValues.push(taskData.task_status);
  }
  if (taskData.assign_users) {
    queryFields.push("assign_users = ?");
    queryValues.push(JSON.stringify(taskData.assign_users));
  }
  if (taskData.description) {
    queryFields.push("description = ?");
    queryValues.push(taskData.description);
  }
  if (taskData.more_information) {
    queryFields.push("more_information = ?");
    queryValues.push(taskData.more_information);
  }
  if (taskData.options) {
    queryFields.push("options = ?");
    queryValues.push(taskData.options);
  }
  if (taskData.project_id) {
    queryFields.push("project_id = ?");
    queryValues.push(taskData.project_id);
  }

  // Add the updatedAt field to the query
  queryFields.push("updatedAt = NOW()");

  // Ensure that there's at least one field to update
  if (queryFields.length === 0) {
    throw new Error("No fields to update");
  }

  // Append the WHERE clause
  const sql = `UPDATE projects SET ${queryFields.join(", ")} WHERE id = ?`;

  // Add the ID to the end of the query values
  queryValues.push(id);

  try {
    const [rows, fields] = await pool.query(sql, queryValues);
    return rows.affectedRows > 0; // Return true if update was successful
  } catch (error) {
    console.error(`Error updating project with ID ${id}:`, error);
    throw error;
  }
};
