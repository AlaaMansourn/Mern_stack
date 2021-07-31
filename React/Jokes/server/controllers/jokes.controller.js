const Joke = require("../models/jokes.models");


module.exports.findAllJokes = (req, res) => {
    Joke.find()
      .then(allDaJokes => res.json({ Jokes: allDaJokes }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({_id:req.param._id})
      .then(oneSingleJoke => res.json({ Joke: oneSingleJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
      .then(newlycreatedJoke => res.json({ Joke: newlycreatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate({_id:req.param._id},req.body,{new:true})
      .then(updatedJoke => res.json({ Joke: updatedJoke }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

  module.exports.deleteExistingJoke = (req, res) => {
    Joke.deleteOne({_id:req.param._id})
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

