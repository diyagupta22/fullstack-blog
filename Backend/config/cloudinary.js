const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dmhpybrey",
  api_key: "877589658382642",
  api_secret: "0ygN3HX3qWaboNawMa38LBIVr4Q",
});

module.exports = cloudinary;