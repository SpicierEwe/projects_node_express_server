const pool = require("../config/database");

// Update an employee
module.exports = async function updateEmployee(id, employeeData) {
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
  } = employeeData;

  try {
    const [rows, fields] = await pool.query(
      `UPDATE employees SET 
        company_id = ?, 
        user_id = ?, 
        location_id = ?, 
        clock_in_time = ?, 
        clock_out_time = ?, 
        clock_in_ip = ?, 
        clock_out_ip = ?, 
        working_from = ?, 
        late = ?, 
        half_day = ?, 
        added_by = ?, 
        last_updated_by = ?, 
        latitude = ?, 
        longitude = ?, 
        shift_start_time = ?, 
        shift_end_time = ?, 
        employee_shift_id = ?, 
        created_at = ?, 
        updated_at = NOW(), 
        work_from_type = ?, 
        overwrite_attendance = ? 
      WHERE id = ?`,
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
        work_from_type,
        overwrite_attendance,
        id,
      ]
    );

    return rows.affectedRows > 0; // Return true if update was successful
  } catch (error) {
    console.error(`Error updating employee with ID ${id}:`, error);
    throw error;
  }
};
