const pgp = require("pg-promise")({});
const dotenv = require('dotenv');
dotenv.load();
// const connectionString = "postgres://localhost/leafbit";
const connectionString = process.env.DATABASE_URL;
const db = pgp(connectionString);

module.exports = db;