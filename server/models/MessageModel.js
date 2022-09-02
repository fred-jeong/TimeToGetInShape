const mongoose = require('mongoose');
require('dotenv').config()

const myURI = process.env.personalURI

// connect to MongoDb with mongoose
mongoose
  .connect(myURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to your MongoDB!');
  })
  .catch((err) => {
    console.log('Error connecting to your MongoDB', err);
  });

// creating a schema for the database, that MUST have:
// a property message with type string
// a property password with type string
// a property created_at that defaults to the current time
const messageSchema = new mongoose.Schema({
  message: { type: String, required: true},
  password: { type: String, required: true},
  created_at: {type: Date, required: true, default: Date.now()}
});

// store data in a collection/table called Message
const Message = mongoose.model('Message', messageSchema);

module.exports = Message; // <-- export your model
