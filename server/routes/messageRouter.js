const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authController = require('../controllers/authController.js');

// route to get messages from the database
router.get('/messages', messageController.getMessage, (req, res) => {
  return res.status(200).json(res.locals.getMessage);
});

// route to post messages to the database
router.post('/messages', authController.setCookies, messageController.postMessage, (req, res) => {
  return res.status(200).send('Successfully posted message to database!');
});

// route to delete messages from the database
router.delete('/messages/:_id', authController.checkCookies, messageController.deleteMessage, (req, res) => {
  return res.status(200).send('Successfully deleted message from database!');
});

module.exports = router;