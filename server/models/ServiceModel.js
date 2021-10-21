const { db } = require("../db/db");
const { DBModel } = require("./model");

class ServiceModel extends DBModel {
  serviceid;
  servicepicurl;
  servicetitle;
  servicedetail;
  servicefacility;
  location;
  priceperday;

  constructor(data) {
    super({
      table: "services",
      primaryKey: "serviceid",
    });
    Object.assign(this, data);
  }

  static async getServices() {
    const data = await db.query("SELECT * FROM services");
    return data.map((row) => new ServiceModel(row));
  }

  static async getServiceByID(serviceid) {
    const data = await db.query("SELECT * FROM services WHERE serviceid = $1", [serviceid]);
    return data.length > 0 ? new ServiceModel(data[0]) : null;
  }
}

exports.ServiceModel = ServiceModel;
