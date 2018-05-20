var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/leafbit";
var db = pgp(connectionString);

module.exports = db;