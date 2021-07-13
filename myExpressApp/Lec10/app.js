const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const { constants } = require('./constants');
const { userRouter, userAuthRouter } = require('./routes');

const app = express();

_mongooseConnector();

const port = constants.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.use(fileUpload());

app.use('/auth', userAuthRouter);
app.use('/users', userRouter);
app.use(_handleErrors);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listen ${port} `);
});

// eslint-disable-next-line no-unused-vars
function _handleErrors(err, req, res, next) {
  res.status(err.status).json({
    message: err.message || 'Unknown error',
    customCode: err.code || 0,

  });
}

function _mongooseConnector() {
  mongoose.connect(constants.DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}
