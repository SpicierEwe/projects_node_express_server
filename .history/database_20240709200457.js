const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "7905121424",
  database: "events",
});

// get all the table
export async function getAllData() {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM events");
    return rows;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// calling the function
getAllData()
  .then((data) => console.log(data))
  .catch((error) => console.error("Error in fetching data:", error));
