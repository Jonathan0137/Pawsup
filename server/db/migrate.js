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
        priceperday DECIMAL DEFAULT 0.00,
        service_rating DECIMAL DEFAULT 0,
        service_pet_breed VARCHAR(200) NOT NULL
      );
    `);

    // Populate services table
    await db.query(`
      INSERT INTO services(servicepicurl, servicetitle, servicedetail, servicefacility, location, priceperday, service_rating, service_pet_breed)
        VALUES 
        ('{"www.url1.com","www.url2.com"}', 'Cat grooming', 'Cat grooming service', 'Facility A', 'Markham', 60, 3, 'Cat'),
        ('{"www.url3.com","www.url4.com"}', 'Dog walking', 'Dog grooming service', 'Facility B', 'Markham', 55, 2.7, 'Dog'),
        ('{"www.url5.com","www.url6.com"}', 'Parrot training', 'Parrow training service', 'Facility C', 'Scarborough', 100, 4.9, 'Parrot'),
        ('{"www.url7.com","www.url8.com"}', 'Pet emergency care', 'Emergency care service', 'Facility D', 'Toronto', 200, 3.6, 'Hamster'),
        ('{"www.url9.com","www.url0.com"}', 'Pet sitting', 'Pet sitting service', 'Facility E', 'Toronto', 20, 1.2, 'Dog');
    `);

    // Create products table
    await db.query(`
        CREATE TABLE IF NOT EXISTS products (
          product_id serial PRIMARY KEY,
          product_name VARCHAR(200) NOT NULL,
          product_detail VARCHAR(200) NOT NULL,
          product_origin VARCHAR(200) NOT NULL,
          product_category VARCHAR(200) NOT NULL,
          product_pet_breed VARCHAR(200) NOT NULL,
          product_type VARCHAR(200) NOT NULL,
          product_pic_url VARCHAR(200)[] NOT NULL,
          product_price DECIMAL DEFAULT 0.00,
          product_rating DECIMAL DEFAULT 0
        );
    `);

    // Populate products table
    await db.query(`
      INSERT INTO products(product_name, product_detail, product_origin, product_category, product_pet_breed, product_type, product_pic_url, product_price, product_rating)
        VALUES
        ('Green Farms Dog Food', 'Delicious and healthy dog food', 'USA', 'Food', 'Dog', 'Small', '{"www.url21.com","www.url22.com"}', 2.99, 3.5), 
        ('Red Farms Cat Food', 'Delicious and healthy cat food', 'USA', 'Food', 'Cat', 'Medium', '{"www.url25.com","www.url11.com"}', 5.99, 4.5), 
        ('Mouse Toy', 'Fun and interactive cat toy', 'China', 'Toy', 'Cat', 'Large', '{"www.url91.com","www.url27.com"}', 10.99, 2.3), 
        ('Hamster Wheel', 'Fun hamster wheel', 'Canada', 'Toy', 'Hamster', 'Small', '{"www.url92.com","www.url28.com"}', 1.50, 0.2);
    `);

    // Create comments table
    await db.query(`
      CREATE TABLE IF NOT EXISTS comments (
        comment_id serial PRIMARY KEY,
        comment_type VARCHAR(200) NOT NULL,
        foreign_id integer NOT NULL,
        comment_detail VARCHAR(200) NOT NULL,
        author_name VARCHAR(200) NOT NULL,
        author_profile_pic_url VARCHAR(200) NOT NULL,
        comment_time VARCHAR(200) NOT NULL,
        comment_replies VARCHAR(200)[]
      );
    `);

    // Populate comments table
    await db.query(`
      INSERT INTO comments(comment_type, foreign_id, comment_detail, author_name, author_profile_pic_url, comment_time, comment_replies)
        VALUES
        ('product', 2, 'My cat loved it! Wow!', 'chris221', 'www.hostedpic1.com', '2021-10-20 4:00PM', '{{"john10", "www.url2.com", "I will try buying it too!", "2021-10-21 2:21PM"}, {"catwoman490", "www.url5.com", "I bought some too!", "2021-10-21 2:41PM"}}'),
        ('product', 3, 'It was delicious. Wait... What do you mean its for dogs?', 'tommy55', 'www.hostedpic5.com', '2021-10-21 1:10PM', '{{"john10", "www.url2.com", "Whao man", "2021-10-21 2:21PM"}, {"steven21", "www.url8.com", "Are you ok?", "2021-10-21 2:55PM"}}'
      );
    `)

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
