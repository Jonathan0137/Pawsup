const { db } = require("../db/db");
const { DBModel } = require("./model");

class ServiceModel extends DBModel {
  service_id;
  service_pic_url;
  service_title;
  service_detail;
  service_facility;
  location;
  price_per_day;
  service_rating;
  service_pet_breed;
  provider_id;
  provider_name;
  provider_phone;
  provider_email;
  provider_avatar;

  constructor(data) {
    super({
      table: "services",
      primaryKey: "service_id",
    });
    Object.assign(this, data);
  }

  static async getServices(locations, pet_breeds, minPrice, maxPrice, sortBy, sortDirection = "ASC") {
    let query = "SELECT * FROM services";
    const params = [];

    // Apply optional filters to query if they are specified
    if (locations.length > 0 || pet_breeds.length > 0 || (minPrice != null) || (maxPrice != null)) {
      query += " WHERE";

      if (locations.length > 0) {
        query += ` location IN (`;
        for (const location of locations) {
          params.push(location);
          query += `$${params.length},`;
        }
        query = query.slice(0, -1);
        query += ") AND";
      }

      if (pet_breeds.length > 0) {
        query += ` service_pet_breed IN (`;
        for (const pet_breed of pet_breeds) {
          params.push(pet_breed);
          query += `$${params.length},`;
        }
        query = query.slice(0, -1);
        query += ") AND";
      }

      if (minPrice != null) {
        params.push(minPrice);
        query += ` price_per_day >= $${params.length} AND`;
      }

      if (maxPrice != null) {
        params.push(maxPrice);
        query += ` price_per_day <= $${params.length} AND`;
      }

      // Remove the trailing " AND";
      query = query.slice(0, -4);
    }

    // Apply the sorting direction if specified
    const validSortColumns = ["price_per_day", "service_rating"];
    if (validSortColumns.includes(sortBy?.toLowerCase())) {
      if (sortDirection !== "ASC") {
        sortDirection = "DESC";
      }
  
      query += ` ORDER BY ${sortBy} ${sortDirection}`;
    }

    const data = await db.query(query, params);
    return data.map((row) => new ServiceModel(row));
  }

  static async getServiceByID(service_id) {
    const data = await db.query("SELECT * FROM services WHERE service_id = $1", [service_id]);
    return data.length > 0 ? new ServiceModel(data[0]) : null;
  }
}

exports.ServiceModel = ServiceModel;
