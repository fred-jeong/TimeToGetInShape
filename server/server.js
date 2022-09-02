const express = require('express');
const path = require('path');
const messageRouter = require('./routes/messageRouter');
const app = express();
const cookieParser = require('cookie-parser');

// declare a PORT number for HTTP serve to listen on
const PORT = 8080;

app.use(express.json());
app.use(cookieParser());

// serve the index.html file from the views folder (message board)
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname, '../views/index.html'));
});

// serve the CSS and JS files from assets
app.use(express.static('assets'));

// use the messageRouter as a module to load middleware functions to the '/messages' path
app.use('/', messageRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

// global error handler 
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server that listens on port 8080
app.listen(PORT, () => {
  console.log('Listening at port 8080');
});