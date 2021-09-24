const { db } = require("../db/db");
const { DBModel } = require("./model");

class ServiceModel extends DBModel {
  id;
  title;
  content;
  image;

  constructor(data) {
    super({
      table: "services",
      primaryKey: "id",
    });
    Object.assign(this, data);
  }

  static async getServices() {
    const data = await db.query("SELECT * FROM services");
    return data.map((row) => new ServiceModel(row));
  }

  static async getServiceByID(id) {
    const data = await db.query("SELECT * FROM services WHERE id = $1", [id]);
    return data.length > 0 ? new ServiceModel(data[0]) : null;
  }
}

exports.ServiceModel = ServiceModel;
