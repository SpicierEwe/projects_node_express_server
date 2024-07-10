const pool = required("../config/database");

export async function createEvent(eventData) {
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
