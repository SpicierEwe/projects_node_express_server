const pool = require("../config/database");

// Read all events
module.exports = async function getAllEmployees() {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM employees");
    return rows;
  } catch (error) {
    console.error("Error fetching all employees:", error);
    throw error;
  }
};
