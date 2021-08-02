const ProductController = require("../controllers/product.controller")



module.exports = app => {
    app.get("/api/",ProductController.getAllProduct);
    app.post("/api/create/new",ProductController.createProduct);
    
  };