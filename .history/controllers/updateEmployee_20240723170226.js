const pool = require("../config/database");

// Update a task
module.exports = async function updateTask(id, taskData) {
  const {
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
    updatedAt,
  } = taskData;

  try {
    const [rows, fields] = await pool.query(
      `UPDATE tasks SET 
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
    console.error(`Error updating task with ID ${id}:`, error);
    throw error;
  }
};
