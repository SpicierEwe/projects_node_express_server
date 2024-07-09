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
  const data = await pool.query("SELECT * FROM events");
  return data;
};

console.log(getAllData());
console.log(data);
