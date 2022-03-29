const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Binuka123#",
    host: "localhost",
    port: 5432,
    database: "petp1"
});

module.exports = pool;