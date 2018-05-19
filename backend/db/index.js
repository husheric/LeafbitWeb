var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/passionproject";
var db = pgp(connectionString);

module.exports = db;