const express = require("express");
const { ServicePageModel } = require("../models/ServicePageModel");
// Base route: /api/servicepages
const ServicePagesController = express.Router();

// GET /api/servicespages
ServicePagesController.get("/", async (req, res) => {
  try {
    const servicepages = await ServicePageModel.getServicePages();
    res.json(servicepages.map((servicepage) => servicepage.cleanCopy()));
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while fetching servicepages" });
  }
});

// POST /api/servicepages
ServicePagesController.post("/", async (req, res) => {
  const { servicetitle, listofservicepic, servicedetail, servicefacility, location, priceperday } = req.body;

  if (!servicetitle || !listofservicepic || !servicedetail || !servicefacility || !location || !priceperday) {
    return res.status(400).json({
      message: "[serviceTitle, listOfServicePic, serviceDetail, serviceFacility, location, pricePerDay] cannot be empty in response body",
    });
  }

  if (isNaN(priceperday))
  {
    return res.status(401).json({
      message: "[pricePerDay] is not of numerical form]",
    });
  }

  const servicepage = new ServicePageModel({
    serviceTitle: servicetitle,
    listOfServicePic: listofservicepic,
    serviceDetail: servicedetail,
    serviceFacility: servicefacility,
    Location: location,
    pricePerDay: priceperday,
  });

  try {
    await servicepage.insert();
    res.status(201).json(servicepage.cleanCopy());
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while creating servicepage" });
  }
});

exports.ServicePagesController = ServicePagesController;
