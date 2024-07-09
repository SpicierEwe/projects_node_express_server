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
  await pool.query("SELECT * FROM events").then((data) => data);
};

getAllData().then((data) => console.log(data));
