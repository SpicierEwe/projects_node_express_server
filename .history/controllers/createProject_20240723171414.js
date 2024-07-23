const pool = require("../config/database");

module.exports = async function createTask(projectData) {
  const {
    id,
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
  } = projectData;

  try {
    const [rows, fields] = await pool.query(
      "INSERT INTO tasks (id, title, milestone, priority, task_status, assign_users, description, more_information, options, project_id, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        id,
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
      ]
    );

    return rows.insertId; // Return the ID of the newly inserted task
  } catch (error) {
    console.error("Error creating project:", error);
    throw error;
  }
};
