const express = require("express");
const { ServiceModel } = require("../models/ServiceModel");
// Base route: /api/services
const ServicesController = express.Router();

// GET /api/services
ServicesController.get("/", async (req, res) => {
  try {
    // Optional filtering and sorting parameters for getting services
    let { locations = "", pet_breeds = "", minPrice, maxPrice, sortBy, sortDirection } = req.query;
    locations = locations.split(",").filter(item => item);
    pet_breeds = pet_breeds.split(",").filter(item => item);

    const services = await ServiceModel.getServices(locations, pet_breeds, minPrice, maxPrice, sortBy, sortDirection);
    res.json(services.map((service) => service.cleanCopy()));
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while fetching services" });
  }
});

//GET /api/services/:serviceid
ServicesController.get("/:serviceid", async (req, res) => {
  const { serviceid } = req.params;

  try {
    const service = await ServiceModel.getServiceByID(serviceid);
    if (!service) {
      return res.status(404).json({
        message: `Service with ID '${serviceid}' not found`,
      });
    }
    res.status(200).json(service.cleanCopy());
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while fetching services" });
  }
});

// POST /api/services
ServicesController.post("/", async (req, res) => {
  const { servicepicurl, servicetitle, servicedetail, servicefacility, location, priceperday } = req.body;

  if (!servicepicurl || !servicetitle || !servicedetail || !servicefacility || !location || !priceperday) {
    return res.status(400).json({
      message: "Fields are missing from request body",
    });
  }

  const service = new ServiceModel({
    servicepicurl: servicepicurl,
    servicetitle: servicetitle,
    servicedetail: servicedetail,
    servicefacility: servicefacility,
    location: location,
    priceperday: priceperday,
  });

  try {
    await service.insert();
    res.status(201).json(service.cleanCopy());
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while creating service" });
  }
});

// PUT /api/services/:serviceid
ServicesController.put("/:serviceid", async (req, res) => {
  const { serviceid } = req.params;
  const { servicepicurl, servicetitle, servicedetail, servicefacility, location, priceperday } = req.body;

  if (!servicepicurl || !servicetitle || !servicedetail || !servicefacility || !location || !priceperday) {
    return res.status(400).json({
      message: "Fields are missing from request body",
    });
  }

  try {
    const service = await ServiceModel.getServiceByID(serviceid);
    if (!service) {
      return res.status(404).json({
        message: `Service with ID '${serviceid}' not found`,
      });
    }

    service.servicepicurl = servicepicurl;
    service.servicetitle = servicetitle;
    service.servicedetail = servicedetail;
    service.servicefacility = servicefacility;
    service.location = location;
    service.priceperday = priceperday;

    await service.save();
    res.status(200).json(service.cleanCopy());
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while updating service" });
  }
});

// DELETE /api/services/:serviceid
ServicesController.delete("/:serviceid", async (req, res) => {
  const { serviceid } = req.params;

  try {
    const service = await ServiceModel.getServiceByID(serviceid);
    if (!service) {
      return res.status(404).json({
        message: `Service with ID '${serviceid}' not found`,
      });
    }

    await service.delete();
    res.status(200).json({ message: "Successfully deleted service" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while deleting service" });
  }
});

exports.ServicesController = ServicesController;
