const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const { constant } = require('./constants');
const { userRouter } = require('./routes');

const app = express();

_mongooseConnector();

const port = constant.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/users', userRouter);
app.use(_hadleErrors);

app.listen(port, () => {
	console.log(`App listen ${port} `);
});

function _hadleErrors(err, req, res, next) {
	res.status(err.status).json({
		message: err.message || 'Unknown error',
		customCode: err.code || 0
	});
}

function _mongooseConnector() {
	mongoose.connect('MongoDBTEst://localhost:27017', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
}
