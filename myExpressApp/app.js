// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;

// ========================   l2   ===================

const express = require('express');
const expressHbs = require('express-handlebars'); //44:00
const path = require('path'); //46

const app = express();

app.use(express.static(path.join(__dirname, 'static'))); //54 сделали публичную папку

app.set('view engine', '.hbs'); //49:00
app.engine(
	'.hbs',
	expressHbs({
		defaultLayout: false
	})
); //49:00

app.set('views', path.join(__dirname, 'static')); //49:00

app.use(express.json());

let users = [
	{ name: 'Dima', age: 22 },
	{ name: 'Vika', age: 18 },
	{ name: 'Cvrystina', age: 16 },
	{ name: 'Viktor', age: 25 }
];
// app.get('/', (req, res) => {
// 	console.log(req);

// 	// res.write('Hellosiki \n');
// 	// res.write('Hellosiki2');

// 	// res.end('Helloo chat');
// 	// ++ 14:28 ++
// 	// res.send('HELO');
// 	// ++ 15:47 ++
// 	res.json('yakas hren');
// 	// чаще всего используется
// });

// app.get('/ping', (req, res) => {
// 	res.end('pong');
// });

// app.post('/', (req, res) => {
// 	console.log(req.body);
// 	res.json('POST');
// });
// 20:00 пост можно увидеть в postman. Пишем там в body json объект и чтобы получить в ноде добавляем 68 и app.use(express.json()) 49

// // +++ 25 +++
// app.get('/users', (req, res) => {
// 	res.json(users);
// });
// //тепер одного

// app.get('/users/1', (req, res) => {
// 	res.json(users[1]);
// });

// app.get('/users/:userId', (req, res) => {
// 	const { userId } = req.params;

// 	res.json(users[userId]);
// });
// +++ 29:00 +++ В одному реквести может быть params, query , body. req.query примає все що після ?, req.body - все що в бади и req.params  всі дінамічні параметри з урл

// +++   55  +++

app.get('/users', (req, res) => {
	res.render('users', { name: 'Diana', users });
});

app.listen(3000, () => {
	console.log('App listen 3000');
});
