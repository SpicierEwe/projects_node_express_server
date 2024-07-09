import mySql from "mysql2";

const pool = mySql
  .createPool({
    host: "localhost",
    user: "root",
    password: "7905121424",
    database: "events",
  })
  .promise();
