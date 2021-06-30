const express = require('express');
const path = require('path');
const { constant } = require('./constants');
const { userRouter } = require('./routes');
const { loginRouter } = require('./routes');

const app = express();
const port = constant.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'static')));

app.use('/users', userRouter);

app.listen(port, () => {
	console.log(`App listen ${port} `);
});
