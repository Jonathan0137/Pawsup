const express = require("express");
const { ServiceModel } = require("../models/ServiceModel");
// Base route: /api/services
const ServicesController = express.Router();

// GET /api/services
ServicesController.get("/", async (req, res) => {
  try {
    const services = await ServiceModel.getServices();
    res.json(services.map((service) => service.cleanCopy()));
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while fetching services" });
  }
});

// POST /api/services
ServicesController.post("/", async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "[title, content] cannot be empty in response body",
    });
  }

  const service = new ServiceModel({
    title: title,
    content: content,
    image: "placeholder.svg",
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

// PUT /api/services/:id
ServicesController.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({
      message: "[title, content] cannot be empty in response body",
    });
  }

  try {
    const service = await ServiceModel.getServiceByID(id);
    if (!service) {
      return res.status(404).json({
        message: `Service with ID '${id}' not found`,
      });
    }

    service.title = title;
    service.content = content;
    await service.save();
    res.status(200).json(service.cleanCopy());
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Encountered an error while updating service" });
  }
});

// DELETE /api/services/:id
ServicesController.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const service = await ServiceModel.getServiceByID(id);
    if (!service) {
      return res.status(404).json({
        message: `Service with ID '${id}' not found`,
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
