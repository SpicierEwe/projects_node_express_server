import mySql from "mysql2";

const db = mySql.createPool({
  host: "localhost",
  user: "root",
  password: "7905121424",
  database: "events",
});
