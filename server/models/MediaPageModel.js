const { db } = require("../db/db");
const { DBModel } = require("./model");

class MediaPageModel extends DBModel {
  id;
  author_id;
  media_picture_url;
  media_title;
  media_detail;
  published_time;

  constructor(data) {
    super({
      table: "mediaPages",
      primaryKey: "id",
    });
    Object.assign(this, data);
  }

  static async getMediaPages() {
    const data = await db.query("SELECT * FROM mediaPages");
    return data.map((row) => new MediaPageModel(row));
  }

  static async getMediaPagesByID(id) {
    const data = await db.query("SELECT * FROM mediaPages WHERE id = $1", [id]);
    return data.length > 0 ? new MediaPageModel(data[0]) : null;
  }
}

exports.MediaPageModel = MediaPageModel;


/*serviceTitle
listOfServicePic
serviceDetail
serviceFacility
Location
pricePerday*/