const pool = require("../config/database");

export async function deleteEvent(id) {
  try {
    const [rows, fields] = await pool.query("DELETE FROM events WHERE id = ?", [
      id,
    ]);
    return rows.affectedRows > 0; // Return true if deletion was successful
  } catch (error) {
    console.error(`Error deleting event with ID ${id}:`, error);
    throw error;
  }
}
