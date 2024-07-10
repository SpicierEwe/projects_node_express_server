const mysql = require("mysql2/promise");

const pool = require("../config/database");



const x = class Controllers {


    constructor() {}


// Create a new event
async function createEvent(eventData) {
  const {
    parent_id,
    company_id,
    event_name,
    label_color,
    location,
    description,
    start_date_time,
    end_date_time,
    host,
    status,
    note,
    repeat,
    repeat_every,
    repeat_cycles,
    repeat_type,
    send_reminder,
    remind_time,
    remind_type,
    event_link,
    added_by,
    last_updated_by,
    event_id,
  } = eventData;

  try {
    const [rows, fields] = await pool.query(
      "INSERT INTO events (parent_id, company_id, event_name, label_color, location, description, start_date_time, end_date_time, host, status, note, `repeat`, repeat_every, repeat_cycles, repeat_type, send_reminder, remind_time, remind_type, event_link, added_by, last_updated_by, event_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        parent_id,
        company_id,
        event_name,
        label_color,
        location,
        description,
        start_date_time,
        end_date_time,
        host,
        status,
        note,
        repeat,
        repeat_every,
        repeat_cycles,
        repeat_type,
        send_reminder,
        remind_time,
        remind_type,
        event_link,
        added_by,
        last_updated_by,
        event_id,
      ]
    );

    return rows.insertId; // Return the ID of the newly inserted event
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
}

// Read all events
async function getAllEvents() {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM events");
    return rows;
  } catch (error) {
    console.error("Error fetching all events:", error);
    throw error;
  }
}

// Read a specific event by ID
async function getEventById(id) {
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

// Update an event
async function updateEvent(id, eventData) {
  const {
    parent_id,
    company_id,
    event_name,
    label_color,
    location,
    description,
    start_date_time,
    end_date_time,
    host,
    status,
    note,
    repeat,
    repeat_every,
    repeat_cycles,
    repeat_type,
    send_reminder,
    remind_time,
    remind_type,
    event_link,
    last_updated_by,
    event_id,
  } = eventData;

  try {
    const [rows, fields] = await pool.query(
      "UPDATE events SET parent_id=?, company_id=?, event_name=?, label_color=?, location=?, description=?, start_date_time=?, end_date_time=?, host=?, status=?, note=?, `repeat`=?, repeat_every=?, repeat_cycles=?, repeat_type=?, send_reminder=?, remind_time=?, remind_type=?, event_link=?, last_updated_by=?, event_id=?, updated_at=NOW() WHERE id=?",
      [
        parent_id,
        company_id,
        event_name,
        label_color,
        location,
        description,
        start_date_time,
        end_date_time,
        host,
        status,
        note,
        repeat,
        repeat_every,
        repeat_cycles,
        repeat_type,
        send_reminder,
        remind_time,
        remind_type,
        event_link,
        last_updated_by,
        event_id,
        id,
      ]
    );

    return rows.affectedRows > 0; // Return true if update was successful
  } catch (error) {
    console.error(`Error updating event with ID ${id}:`, error);
    throw error;
  }
}

// Delete an event
async function deleteEvent(id) {
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

}

