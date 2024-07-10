const pool = require("../config/database");

// Update an event
export async function updateEvent(id, eventData) {
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
