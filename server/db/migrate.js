require("dotenv-safe").config();
const { db } = require("./db");

async function migrate() {
  try {
    // Create users table
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
          uid serial PRIMARY KEY,
          username VARCHAR(30) NOT NULL,
          email VARCHAR(30) NOT NULL,
          password VARCHAR(30) NOT NULL,
          fname VARCHAR(30) NOT NULL,
          lname VARCHAR(30) NOT NULL,
          city VARCHAR(30) NOT NULL
      );
    `);

    // Populate users table
    await db.query(`
      INSERT INTO users(username, email, password, fname, lname, city)
        VALUES
        ('testuser', 'testuser@email.com', 'testpassword', 'FirstName', 'LastName', 'Scarborough'),
        ('testuser2', 'testuser2@email.com', 'testpassword2', 'FirstName2', 'LastName2', 'Toronto');
    `);

    // Create providers table
    await db.query(`
      CREATE TABLE IF NOT EXISTS providers (
        provider_id serial PRIMARY KEY,
        provider_name VARCHAR(200) NOT NULL,
        provider_phone VARCHAR(200) NOT NULL,
        provider_email VARCHAR(200) NOT NULL,
        provider_avatar VARCHAR(200) NOT NULL
      );
    `);

    // Populate providers table
    await db.query(`
      INSERT INTO providers(provider_name, provider_phone, provider_email, provider_avatar)
        VALUES
        ('FirstName LastName', '123-456-7890', 'testuser@email.com', 'www.exampleurl.com'),
        ('FirstName2 LastName2', '123-456-7890', 'testuser2@email.com', 'www.exampleurl2.com');
    `);

    // Create services table
    await db.query(`
      CREATE TABLE IF NOT EXISTS services (
        service_id serial PRIMARY KEY,
        service_pic_url VARCHAR(200)[] NOT NULL,
        service_title VARCHAR(200) NOT NULL,
        service_detail VARCHAR(200) NOT NULL,
        service_facility VARCHAR(200)[] NOT NULL,
        location VARCHAR(200) NOT NULL,
        price_per_day DECIMAL DEFAULT 0.00,
        service_rating DECIMAL DEFAULT 0,
        service_pet_breed VARCHAR(200) NOT NULL,
        pid INTEGER REFERENCES providers (provider_id)
      );
    `);

    // Populate services table
    await db.query(`
      INSERT INTO services(service_pic_url, service_title, service_detail, service_facility, location, price_per_day, service_rating, service_pet_breed, pid)
        VALUES 
        ('{"www.url1.com","www.url2.com"}', 'Cat grooming', 'Cat grooming service', '{"Bath","Toys"}', 'Markham', 60, 3, 'Cat', 1),
        ('{"www.url3.com","www.url4.com"}', 'Dog walking', 'Dog grooming service', '{"Bath","Toys"}', 'Markham', 55, 2.7, 'Dog', 1),
        ('{"www.url5.com","www.url6.com"}', 'Parrot training', 'Parrow training service', '{"Bath","Toys"}', 'Scarborough', 100, 4.9, 'Parrot', 2),
        ('{"www.url7.com","www.url8.com"}', 'Pet emergency care', 'Emergency care service', '{"Bath","Toys"}', 'Toronto', 200, 3.6, 'Hamster', 2),
        ('{"www.url9.com","www.url0.com"}', 'Pet sitting', 'Pet sitting service', '{"Bath","Toys"}', 'Toronto', 20, 1.2, 'Dog', 2);
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
          product_type VARCHAR(200)[] NOT NULL,
          product_pic_url VARCHAR(200)[] NOT NULL,
          product_price DECIMAL[] NOT NULL,
          product_rating DECIMAL DEFAULT 0
        );
    `);

    // Populate products table
    await db.query(`
      INSERT INTO products(product_name, product_detail, product_origin, product_category, product_pet_breed, product_type, product_pic_url, product_price, product_rating)
        VALUES
        ('Green Farms Dog Food', 'Delicious and healthy dog food', 'Pawsup', 'Food', 'Dog', '{"Small", "Medium", "Large"}', '{"www.url21.com","www.url22.com"}', '{2.99, 3.99, 5.99}', 3.5), 
        ('Red Farms Cat Food', 'Delicious and healthy cat food', 'Pawsup', 'Food', 'Cat', '{"Small", "Medium", "Large"}', '{"www.url25.com","www.url11.com"}', '{2.99, 3.99, 5.99}', 4.5), 
        ('Mouse Toy', 'Fun and interactive cat toy', 'Pawsup', 'Toy', 'Cat', '{"Small", "Medium", "Large"}', '{"www.url91.com","www.url27.com"}', '{2.99, 3.99, 5.99}', 2.3), 
        ('Hamster Wheel', 'Fun hamster wheel', 'Pawsup', 'Toy', 'Hamster', '{"Small", "Medium", "Large"}', '{"www.url92.com","www.url28.com"}', '{2.99, 3.99, 5.99}', 0.2);
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
    `);

    // Create mediapages table
    await db.query(`
    CREATE TABLE IF NOT EXISTS users (
        uid serial PRIMARY KEY,
        username VARCHAR(30) NOT NULL,
        email VARCHAR(30) NOT NULL,
        password VARCHAR(30) NOT NULL,
        fname VARCHAR(30) NOT NULL,
        lname VARCHAR(30) NOT NULL,
        city VARCHAR(30) NOT NULL
    );
`);

  // Create mediapages table
  await db.query(`
      CREATE TABLE IF NOT EXISTS mediaPages (
        id serial PRIMARY KEY,
        author_id integer NOT NULL,
        media_picture_url VARCHAR(200)[] NOT NULL,
        media_title VARCHAR(50) NOT NULL,
        media_detail VARCHAR(200) NOT NULL,
        published_time VARCHAR(50) NOT NULL,
        number_of_likes integer NOT NULL
      );
  `);

  // Populate mediapages table
  await db.query(`
  INSERT INTO mediaPages(author_id, media_picture_url, media_title, media_detail, published_time, number_of_likes)
    VALUES
    (1, '{"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg","www.google.com"}', 'Cute Cow', 'This is a picture of a cow!', '2021-09-11 3:12 PM', 10),
    (3, '{"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80","www.google.com"}', 'Adorable Cat', 'This is a picture of a cat!', '2021-10-11 7:15 AM', 7),
    (5, '{"https://thehappypuppysite.com/wp-content/uploads/2017/10/Cute-Dog-Names-HP-long-1024x555.jpg","www.google.com"}', 'Beautiful Pupper', 'This is a picture of a dog!', '2021-11-15 09:55 AM', 11

  );
`);
    
    // Create cart_items table
    await db.query(`
      CREATE TABLE IF NOT EXISTS cart_items (
        id serial PRIMARY KEY,
        user_id INTEGER NOT NULL,
        cart_item_type VARCHAR(200) NOT NULL,
        foreign_id INTEGER NOT NULL
      );
    `);

    // Populate cart_items table
    await db.query(`
      INSERT INTO cart_items(user_id, cart_item_type, foreign_id)
        VALUES
        (1, 'service', 1),
        (1, 'service', 2),
        (1, 'product', 1);
    `);

    console.log("Successfully finished DB migrations");
  } catch (err) {
    console.error("An error occurred while running DB migrations:");
    console.error(err);
    process.exit(1);
  }
}
migrate();