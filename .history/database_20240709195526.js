const mySql = require("mysql2");

const pool = mySql
  .createPool({
    host: "localhost",
    user: "root",
    password: "7905121424",
    database: "events",
  })
  .promise();

const getAllData = async () => {
  try {
    const [rows, fields] = await pool.query("SELECT * FROM events");
    return rows;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Rethrow the error to handle it upstream
  }
};

async function fetchData() {
  try {
    const data = await getAllData();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    // Handle error as needed
  }
}

fetchData(); // Call the async function to start fetching data
