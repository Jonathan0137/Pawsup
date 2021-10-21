const { db } = require("../db/db");
const { DBModel } = require("./model");

class ProductModel extends DBModel {
  product_id;
  product_detail;
  product_name;
  product_origin;
  product_price;
  product_type;
  product_pic_url;
  product_rating;

  constructor(data) {
    super({
      table: "products",
      primaryKey: "product_id",
    });
    Object.assign(this, data);
  }

  static async getProducts() {
    const data = await db.query("SELECT * FROM products");
    return data.map((row) => new ProductModel(row));
  }

  static async getProductByID(product_id) {
    const data = await db.query("SELECT * FROM products WHERE product_id = $1", [product_id]);
    return data.length > 0 ? new ProductModel(data[0]) : null;
  }
}

exports.ProductModel = ProductModel;
