const pool = require("../config/database");

module.exports = async function createProject(projectData) {
  const {
    title,
    milestone,
    priority,
    task_status, // Ensure this is consistent with your database column
    assign_users, // Should be a JSON array
    description,
    more_information,
    options,
    createdAt,
    updatedAt,
  } = projectData;

  try {
    const [rows, fields] = await pool.query(
      "INSERT INTO tasks (title, milestone, priority, task_status, assign_users, description, more_information, options, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        title,
        milestone,
        priority,
        task_status,
        JSON.stringify(assign_users), // Ensure it's a JSON string
        description,
        more_information,
        options,
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
