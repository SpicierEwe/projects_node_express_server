const pool = require("../config/database");

module.exports = async function createEvent(eventData) {
  const {
    company_id,
    user_id,
    location_id,
    clock_in_time,
    clock_out_time,
    clock_in_ip,
    clock_out_ip,
    working_from,
    late,
    half_day,
    added_by,
    last_updated_by,
    latitude,
    longitude,
    shift_start_time,
    shift_end_time,
    employee_shift_id,
    created_at,
    updated_at,
    work_from_type,
    overwrite_attendance,
  } = eventData;

  try {
    const [rows, fields] = await pool.query(
      "INSERT INTO events (company_id, user_id, location_id, clock_in_time, clock_out_time, clock_in_ip, clock_out_ip, working_from, late, half_day, added_by, last_updated_by, latitude, longitude, shift_start_time, shift_end_time, employee_shift_id, created_at, updated_at, work_from_type, overwrite_attendance) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        company_id,
        user_id,
        location_id,
        clock_in_time,
        clock_out_time,
        clock_in_ip,
        clock_out_ip,
        working_from,
        late,
        half_day,
        added_by,
        last_updated_by,
        latitude,
        longitude,
        shift_start_time,
        shift_end_time,
        employee_shift_id,
        created_at,
        updated_at,
        work_from_type,
        overwrite_attendance,
      ]
    );

    return rows.insertId; // Return the ID of the newly inserted event
  } catch (error) {
    console.error("Error creating event:", error);
    throw error;
  }
};
