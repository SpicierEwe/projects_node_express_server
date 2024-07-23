const pool = require("../config/database");

module.exports = async function createProject(projectData) {
  const {
    title,
    milestone,
    priority,
    task_status,
    assign_users, // This should be an array, which will be converted to JSON
    description,
    more_information,
    options,
    project_id,
    createdAt,
    updatedAt,
  } = projectData;

  try {
    const [rows, fields] = await pool.query(
      "INSERT INTO projects (title, milestone, priority, task_status, assign_users, description, more_information, options, project_id, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        title,
        milestone,
        priority,
        task_status,
        JSON.stringify(assign_users), // Convert array to JSON string
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
