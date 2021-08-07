const ProductController = require("../controllers/product.controller")



module.exports = app => {
    app.get("/api/products",ProductController.getAllProduct);
    app.post("/api/create/new",ProductController.createProduct);
    app.get("/api/product/:id",ProductController.getOneProduct);
    app.put("/api/product/:id/edit", ProductController.updateProduct);
    app.delete("/api/product/:id",ProductController.deleteProduct);
    


  };