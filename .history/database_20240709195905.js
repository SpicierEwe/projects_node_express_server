const mySql = require("mysql2");

const pool = mySql
  .createPool({
    host: "localhost",
    user: "root",
    password: "7905121424",
    database: "events",
  })
  .promise();

async function fetchAllData() {
  const [rows] = await pool.query("SELECT * FROM events");
  return rows;
}

fetchAllData();
