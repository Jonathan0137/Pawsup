require("dotenv-safe").config();
const { db } = require("./db");

async function migrate() {
  try {
    // Create services table
    await db.query(`
      CREATE TABLE IF NOT EXISTS services (
        serviceid serial PRIMARY KEY,
        servicepicurl VARCHAR(200)[] NOT NULL,
        servicetitle VARCHAR(200) NOT NULL,
        servicedetail VARCHAR(200) NOT NULL,
        servicefacility VARCHAR(200) NOT NULL,
        location VARCHAR(200) NOT NULL,
        priceperday VARCHAR(200) NOT NULL
      );
  `);

  // Populate services table
  await db.query(`
    INSERT INTO services(servicepicurl, servicetitle, servicedetail, servicefacility, location, priceperday)
      VALUES 
      ('{"www.url1.com","www.url2.com"}', 'Cat grooming', 'Cat grooming service', 'Facility A', '111 Test Dr', '60'),
      ('{"www.url3.com","www.url4.com"}', 'Dog walking', 'Dog grooming service', 'Facility B', '222 Test Dr', '55'),
      ('{"www.url5.com","www.url6.com"}', 'Parrot training', 'Parrow training service', 'Facility C', '222 Test Dr', '100'),
      ('{"www.url7.com","www.url8.com"}', 'Pet emergency care', 'Emergency care service', 'Facility D', '222 Test Dr', '200'),
      ('{"www.url9.com","www.url0.com"}', 'Pet sitting', 'Pet sitting service', 'Facility E', '222 Test Dr', '20'
    );
  `);

  // Create products table
  await db.query(`
      CREATE TABLE IF NOT EXISTS products (
        product_id serial PRIMARY KEY,
        product_detail VARCHAR(200) NOT NULL,
        product_name VARCHAR(200) NOT NULL,
        product_origin VARCHAR(200) NOT NULL,
        product_price VARCHAR(200)[] NOT NULL,
        product_type VARCHAR(200)[] NOT NULL,
        product_pic_url VARCHAR(200)[] NOT NULL,
        product_rating VARCHAR(200) NOT NULL
      );
  `);

  // Populate products table
  await db.query(`
    INSERT INTO products(product_detail, product_name, product_origin, product_price, product_type, product_pic_url, product_rating)
      VALUES 
      ('Delicious and healthy cat food', 'Green Farms Cat Food', 'USA', '{"5","15","25"}', '{"Small", "Medium", "Large"}', '{"www.url21.com","www.url22.com"}', '4.5'),
      ('Fun and interactive cat toy', 'Mouse Toy', 'China', '{"10","15","20"}', '{"Small", "Medium", "Large"}', '{"www.url91.com","www.url27.com"}', '4.9'),
      ('Delicious and healthy dog food', 'Green Farms Dog Food', 'USA', '{"5","15","25"}', '{"Small", "Medium", "Large"}', '{"www.url25.com","www.url11.com"}', '4.5'
    );
  `);

  // Create users table
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
