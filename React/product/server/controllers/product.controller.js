const Product = require("../models/product.models");



   

  module.exports.createProduct = (req, res) => {
    console.log("Recieved the following body: " + res.body);
    Product.create(req.body)
      .then(newlycreatedProduct => res.json({ Product: newlycreatedProduct }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.getAllProduct = (request, response) => {
    Product.find({})
        .then(product => response.json(product))
        .catch(err => response.json(err))
};