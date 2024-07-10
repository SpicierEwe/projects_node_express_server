  // Read a specific event by ID
  static async getEventById(id) {
    try {
      const [rows, fields] = await pool.query(
        "SELECT * FROM events WHERE id = ?",
        [id]
      );
      return rows[0]; // Assuming ID is unique, return the first (and only) row
    } catch (error) {
      console.error(`Error fetching event with ID ${id}:`, error);
      throw error;
    }
  }
