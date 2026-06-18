const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "lumos_aura",
  password: "123456",
  port: 5433,
});

module.exports = pool;