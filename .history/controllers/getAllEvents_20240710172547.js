// Read all events
export async function getAllEvents() {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM events");
    return rows;
  } catch (error) {
    console.error("Error fetching all events:", error);
    throw error;
  }
}
