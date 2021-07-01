/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const { constants } = require('./constants');
const { userRouter } = require('./routes');

const app = express();

_mongooseConnector();

const port = constants.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/users', userRouter);
app.use(_handleErrors);

app.listen(port, () => {
  console.log(`App listen ${port} `);
});

function _handleErrors(err, req, res) {
  res.status(err.status).json({
    message: err.message || 'Unknown error',
    customCode: err.code || 0
  });
}

function _mongooseConnector() {
  mongoose.connect('mongodb://localhost:27017/Les1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}
