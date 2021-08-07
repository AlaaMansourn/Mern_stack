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
module.exports.getOneProduct = (request, response) => {
  Product.findOne({_id:request.params.id})
      .then(product => response.json(product))
      .catch(err => response.json(err))
};

module.exports.updateProduct = (request, response) => {
  Product.findOneAndUpdate({_id:request.params.id},request.body, {new:true})
      .then(product => response.json(product))
      .catch(err => response.json(err))
};
    module.exports.deleteProduct = (request, response) => {
        Product.deleteOne({ _id: request.params.id })
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err))
};

  

