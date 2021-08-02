const express = require("express");
const cors = require("cors");
const app = express();

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors());
const AllMyJokeRoutes = require("./server/routes/product.routes");


AllMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));