const pool = require("../config/database");

// Update a project
module.exports = async function updateProject(id, taskData) {
  const {
    title = "Default Title",
    milestone = "Default Milestone",
    priority = "Default Priority",
    task_status = "Default Status",
    assign_users = "[]", // Assuming it's a JSON field
    description = "Default Description",
    more_information = "Default More Information",
    options = "Default Options",
    project_id = "Default Project ID",
    createdAt = new Date().toISOString(),
    updatedAt = new Date().toISOString(),
  } = taskData;

  try {
    const [rows, fields] = await pool.query(
      `UPDATE projects SET 
        title = ?, 
        milestone = ?, 
        priority = ?, 
        task_status = ?, 
        assign_users = ?, 
        description = ?, 
        more_information = ?, 
        options = ?, 
        project_id = ?, 
        createdAt = ?, 
        updatedAt = NOW() 
      WHERE id = ?`,
      [
        title,
        milestone,
        priority,
        task_status,
        assign_users,
        description,
        more_information,
        options,
        project_id,
        createdAt,
        id,
      ]
    );

    return rows.affectedRows > 0; // Return true if update was successful
  } catch (error) {
    console.error(`Error updating project with ID ${id}:`, error);
    throw error;
  }
};
