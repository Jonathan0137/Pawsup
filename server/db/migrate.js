require("dotenv-safe").config();
const { db } = require("./db");

async function migrate() {
  try {
    await db.query(`DROP SCHEMA public CASCADE`);
    await db.query(`CREATE SCHEMA public`);
    // Create users table
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
          uid serial PRIMARY KEY,
          username VARCHAR(30) NOT NULL,
          email VARCHAR(30) NOT NULL,
          password VARCHAR(30) NOT NULL,
          fname VARCHAR(30) NOT NULL,
          lname VARCHAR(30) NOT NULL,
          city VARCHAR(30) NOT NULL,
          phone_number bigint NOT NULL,
          avatar VARCHAR(200) NOT NULL
      );
    `);

    // Populate users table
    await db.query(`
      INSERT INTO users(username, email, password, fname, lname, city, phone_number, avatar)
        VALUES
        ('testuser', 'testuser@email.com', 'testpassword', 'FirstName', 'LastName', 'Scarborough', '9053728193', 'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__480.jpg'),
        ('testuser2', 'testuser2@email.com', 'testpassword2', 'FirstName2', 'LastName2', 'Toronto', '4163921742', 'https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg');
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
        ('{"https://www.homestratosphere.com/wp-content/uploads/2018/08/dog-house-lead-image-080318-min.jpg", "https://static.thebark.com/sites/default/files/styles/full/public/content/blog/full/dog-proofing-your-home-room-guide.jpg?itok=VXvCpDpB"}', 'Cat grooming', 'Cat grooming service', '{"Bath","Toys"}', 'Markham', 60, 3, 'Cat', 1),
        ('{"https://www.homestratosphere.com/wp-content/uploads/2018/08/dog-house-lead-image-080318-min.jpg", "https://static.thebark.com/sites/default/files/styles/full/public/content/blog/full/dog-proofing-your-home-room-guide.jpg?itok=VXvCpDpB"}', 'Dog walking', 'Dog grooming service', '{"Bath","Toys"}', 'Markham', 55, 2.7, 'Dog', 1),
        ('{"https://www.homestratosphere.com/wp-content/uploads/2018/08/dog-house-lead-image-080318-min.jpg", "https://static.thebark.com/sites/default/files/styles/full/public/content/blog/full/dog-proofing-your-home-room-guide.jpg?itok=VXvCpDpB"}', 'Parrot training', 'Parrow training service', '{"Bath","Toys"}', 'Scarborough', 100, 4.9, 'Parrot', 2),
        ('{"https://www.homestratosphere.com/wp-content/uploads/2018/08/dog-house-lead-image-080318-min.jpg", "https://static.thebark.com/sites/default/files/styles/full/public/content/blog/full/dog-proofing-your-home-room-guide.jpg?itok=VXvCpDpB"}', 'Pet emergency care', 'Emergency care service', '{"Bath","Toys"}', 'Toronto', 200, 3.6, 'Hamster', 2),
        ('{"https://www.homestratosphere.com/wp-content/uploads/2018/08/dog-house-lead-image-080318-min.jpg", "https://static.thebark.com/sites/default/files/styles/full/public/content/blog/full/dog-proofing-your-home-room-guide.jpg?itok=VXvCpDpB"}', 'Pet sitting', 'Pet sitting service', '{"Bath","Toys"}', 'Toronto', 20, 1.2, 'Dog', 2);
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
        ('Green Farms Dog Food', 'Delicious and healthy dog food', 'Pawsup', 'Food', 'Dog', '{"Small", "Medium", "Large"}', '{"https://cdn.shopify.com/s/files/1/1074/9060/products/PuppyLargeDogFrontRight6kg_2000x.png?v=1600605800", "https://cdn.shopify.com/s/files/1/1074/9060/products/sizfishtreats_e7b8446f-fd19-4223-a0a8-0e282fe014ee_1600x.jpg?v=1626106610"}', '{2.99, 3.99, 5.99}', 3.5), 
        ('Red Farms Cat Food', 'Delicious and healthy cat food', 'Pawsup', 'Food', 'Cat', '{"Small", "Medium", "Large"}', '{"https://cdn.shopify.com/s/files/1/1074/9060/products/PuppyLargeDogFrontRight6kg_2000x.png?v=1600605800", "https://cdn.shopify.com/s/files/1/1074/9060/products/sizfishtreats_e7b8446f-fd19-4223-a0a8-0e282fe014ee_1600x.jpg?v=1626106610"}', '{2.99, 3.99, 5.99}', 4.5), 
        ('Mouse Toy', 'Fun and interactive cat toy', 'Pawsup', 'Toy', 'Cat', '{"Small", "Medium", "Large"}', '{"https://cdn.shopify.com/s/files/1/1074/9060/products/PuppyLargeDogFrontRight6kg_2000x.png?v=1600605800", "https://cdn.shopify.com/s/files/1/1074/9060/products/sizfishtreats_e7b8446f-fd19-4223-a0a8-0e282fe014ee_1600x.jpg?v=1626106610"}', '{2.99, 3.99, 5.99}', 2.3), 
        ('Hamster Wheel', 'Fun hamster wheel', 'Pawsup', 'Toy', 'Hamster', '{"Small", "Medium", "Large"}', '{"https://cdn.shopify.com/s/files/1/1074/9060/products/PuppyLargeDogFrontRight6kg_2000x.png?v=1600605800", "https://cdn.shopify.com/s/files/1/1074/9060/products/sizfishtreats_e7b8446f-fd19-4223-a0a8-0e282fe014ee_1600x.jpg?v=1626106610"}', '{2.99, 3.99, 5.99}', 0.2);
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
        comment_time VARCHAR(200) NOT NULL
      );
    `);

    // Populate comments table
    await db.query(`
      INSERT INTO comments(comment_type, foreign_id, comment_detail, author_name, author_profile_pic_url, comment_time)
        VALUES
        ('product', 2, 'My cat loved it! Wow!', 'chris221', 'www.hostedpic1.com', '2021-10-20 4:00PM'),
        ('product', 3, 'It was delicious. Wait... What do you mean its for dogs?', 'tommy55', 'www.hostedpic5.com', '2021-10-21 1:10PM'
      );
    `);

    // Create replies table
    await db.query(`
      CREATE TABLE IF NOT EXISTS replies (
        reply_id serial PRIMARY KEY,
        cid INTEGER REFERENCES comments (comment_id),
        reply_username VARCHAR(200) NOT NULL,
        reply_avatar_url VARCHAR(200) NOT NULL,
        reply_detail VARCHAR(200) NOT NULL,
        reply_time VARCHAR(200) NOT NULL
      );
    `);

    // Populate replies table
    await db.query(`
      INSERT INTO replies(cid, reply_username, reply_avatar_url, reply_detail, reply_time)
        VALUES
        (1, 'chris22', 'www.hostedpic32.com', 'I will try buying it too then', '2021-10-20 5:30PM'),
        (1, 'catwoman55', 'www.hostedpic32.com', 'My cat liked it as well!', '2021-10-20 5:55PM'),
        (1, 'tammy9', 'www.hostedpic32.com', 'I think my cat will like it too', '2021-10-20 7:19PM'),
        (2, 'nancy92', 'www.hostedpic32.com', 'Hahaha', '2021-10-21 4:19PM'),
        (2, 'matt445', 'www.hostedpic32.com', 'I hope you are feeling okay', '2021-10-21 5:22PM'
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
    (1, '{"https://upload.wikimedia.org/wikipedia/commons/8/8c/Cow_%28Fleckvieh_breed%29_Oeschinensee_Slaunger_2009-07-07.jpg","http://leosigh.com/wp-content/uploads/2016/12/rick-astley-never-gonna-give-you-up.jpg"}', 'Cute Cow', 'This is a picture of a cow!', '2021-09-11 3:12 PM', 7),
    (2, '{"https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80","http://leosigh.com/wp-content/uploads/2016/12/rick-astley-never-gonna-give-you-up.jpg"}', 'Adorable Cat', 'This is a picture of a cat!', '2021-10-11 7:15 AM', 2),
    (1, '{"https://thehappypuppysite.com/wp-content/uploads/2017/10/Cute-Dog-Names-HP-long-1024x555.jpg","http://leosigh.com/wp-content/uploads/2016/12/rick-astley-never-gonna-give-you-up.jpg"}', 'Beautiful Pupper', 'This is a picture of a dog!', '2021-11-15 09:55 AM', 11

  );
`);
    
    // Create product_cart_items table
    await db.query(`
      CREATE TABLE IF NOT EXISTS product_cart_items (
        id serial PRIMARY KEY,
        user_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL,
        size VARCHAR NOT NULL
      );
    `);

    // Populate product_cart_items table
    await db.query(`
      INSERT INTO product_cart_items(user_id, product_id, quantity, size)
        VALUES
        (1, 1, 1, 'Small'),
        (1, 2, 4, 'Large');
    `);

    // Create service_cart_items table
    await db.query(`
      CREATE TABLE IF NOT EXISTS service_cart_items (
        id serial PRIMARY KEY,
        user_id INTEGER NOT NULL,
        service_id INTEGER NOT NULL,
        start_date VARCHAR(200) NOT NULL,
        end_date VARCHAR(200) NOT NULL,
        number_of_pets INTEGER NOT NULL
      );
    `);

    // Populate service_cart_items table
    await db.query(`
      INSERT INTO service_cart_items(user_id, service_id, start_date, end_date, number_of_pets)
        VALUES
        (1, 1, '2021-01-01', '2021-01-15', 1),
        (1, 2, '2021-02-10', '2021-02-16', 3);
    `);

    // Create images table
    await db.query(`
      CREATE TABLE IF NOT EXISTS images (
        image_id serial PRIMARY KEY,
        image_name VARCHAR(200),
        image_data BYTEA
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