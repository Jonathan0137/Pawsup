const { db } = require("../db/db");
const { DBModel } = require("./model");

class ServicePageModel extends DBModel {
  id;
  serviceTitle;
  listOfServicePic;
  serviceDetail;
  serviceFacility;
  Location;
  pricePerDay;

  constructor(data) {
    super({
      table: "servicePages",
      primaryKey: "id",
    });
    Object.assign(this, data);
  }

  static async getServicePages() {
    const data = await db.query("SELECT * FROM servicepages");
    return data.map((row) => new ServicePageModel(row));
  }

  static async getServicePagesByID(id) {
    const data = await db.query("SELECT * FROM servicepages WHERE id = $1", [id]);
    return data.length > 0 ? new ServicePageModel(data[0]) : null;
  }
}

exports.ServicePageModel = ServicePageModel;


/*serviceTitle
listOfServicePic
serviceDetail
serviceFacility
Location
pricePerday*/