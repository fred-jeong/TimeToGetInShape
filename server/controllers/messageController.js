const Message = require('../models/MessageModel');

const messageController = {
  // postMessage, create a new item in the database
  async postMessage (req, res, next) {
    const { message, password } = req.body;
    try {
      const postMessage = await Message.create({message, password});
      res.locals.postMessage = postMessage;
      return next();
    }
    catch (err) {
      return next({error: err});
    }
  },
  async getMessage (req, res, next) {
    try {
      const getMessage = await Message.find({});
      res.locals.getMessage = getMessage;
      return next();
    }
    catch (err) {
      return (next({error: err}));
    }
  },
  async deleteMessage (req, res, next) {
    const { _id } = req.params;
    try {
      const deleteMessage = await Message.findOneAndDelete({_id});
      res.locals.deleteMessage = deleteMessage;
      return next();
    }
    catch (err) {
      return next({error: err});
    }
  }
};

module.exports = messageController;