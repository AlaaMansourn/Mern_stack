const JokeController = require("../controllers/jokes.controller")



module.exports = app => {
    app.get("/api/jokes/",JokeController.findAllJokes);
    app.get("/api/jokes/:_id",JokeController.findOneSingleJoke);
    app.post("/api/create/new",JokeController.createJoke);
    app.put("/api/jokes/update/:id",JokeController.updateExistingJoke);
    app.delete("/api/jokes/delete/:id",JokeController.deleteExistingJoke)
  };