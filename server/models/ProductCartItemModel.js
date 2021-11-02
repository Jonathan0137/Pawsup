const { db } = require("../db/db");
const { DBModel } = require("./model");

class ProductCartItemModel extends DBModel {
  id;
  user_id;
  product_id;
  quantity;

  constructor(data) {
    super({
      table: "product_cart_items",
      primaryKey: "id",
    });
    Object.assign(this, data);
  }

  static async getProductCartItemsByUser(user_id) {
    const query = "SELECT * FROM product_cart_items WHERE user_id = $1";
    const params = [user_id];

    const data = await db.query(query, params);
    return data.map((row) => new ProductCartItemModel(row));
  }

  static async deleteCartItemForUser(user_id, product_id) {
    const query = "DELETE FROM product_cart_items WHERE user_id = $1 AND product_id = $2";
    const params = [user_id, product_id];
    await db.query(query, params);
  }
}

exports.ProductCartItemModel = ProductCartItemModel;
