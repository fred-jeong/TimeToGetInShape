const Message = require('../models/MessageModel');

const authController = {
  setCookies (req, res, next) {
    res.cookie('pass', req.body.password, {httpOnly: true});
    return next();
  },
  checkCookies (req, res, next) {
    const { pass } = req.cookies;
    const { _id } = req.params;
    Message.findOne({ _id }, (err, session) => {
      if (err) return next(err);
      else if (pass === session.password) {
        return next();
      }
      else {
        console.log('Password does not match!');
        return;
      }
    });
  }
};

module.exports = authController;