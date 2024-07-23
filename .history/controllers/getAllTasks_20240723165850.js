const pool = require("../config/database");

// Read all events
module.exports = async function getAllEmployees() {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM tasks");
    return rows;
  } catch (error) {
    console.error("Error fetching all tasks:", error);
    throw error;
  }
};
