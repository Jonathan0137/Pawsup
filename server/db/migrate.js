require("dotenv-safe").config();
const { db } = require("./db");

async function migrate() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS services (
        id serial PRIMARY KEY,
        title VARCHAR(200) NOT NULL,
        content VARCHAR(2000) NOT NULL,
        image VARCHAR(200) NOT NULL
      );
  `);
  await db.query(`
      CREATE TABLE IF NOT EXISTS users (
          uid serial PRIMARY KEY,
          username VARCHAR(30) NOT NULL,
          password VARCHAR(30) NOT NULL,
          email VARCHAR(30) NOT NULL,
          location VARCHAR(30) NOT NULL
      );
  `);
    console.log("Successfully finished DB migrations");
  } catch (err) {
    console.error("An error occurred while running DB migrations:");
    console.error(err);
    process.exit(1);
  }
}
migrate();
