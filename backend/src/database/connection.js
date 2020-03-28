const kenx = require("knex");
const configuration = require("../../knexfile");

const config =
  process.env.NODE_ENV === "test"
    ? configuration.test
    : configuration.development;

const connection = kenx(config);

module.exports = connection;
