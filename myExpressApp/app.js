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

// =============================лекция1 25min

// const fs = require('fs');
// // const file = require('./movies/home/file');

// const filePath = __dirname + '/dir/file.js';
// const filePath2 = __dirname + '/dir/fileCopy.js';
// const filePathToRemove = __dirname + '/dir/fdsf.php';
// const filePathNew = __dirname + '/movies/hello.world';

// console.log(filePath);

// fs.writeFile(filePath, 'Helo dec', (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// });

// fs.appendFile(filePath, 'Hey dude \n', (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// });
// дописує данні в файл

// fs.readFile(filePath, (err, data) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	console.log(data.toString());
// });

// fs.mkdir(`${__dirname}/movies/home`, { recursive: true }, (err) => {
// 	console.log(err);
// });

// fs.readdir(`${__dirname}/movies/home`, (err, files) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	// files.forEach((file) => {
// 	// 	console.log(file);
// 	// });
// 	files.forEach((file) => {
// 		fs.stat(`${__dirname}/movies/home/${file}`, (statError, fileStatistic) => {
// 			if (statError) {
// 				console.log(statError);
// 				return;
// 			}

// 			console.log(file);
// 			console.log(fileStatistic.isFile());
// 			console.log(fileStatistic.size);
// 			console.log(fileStatistic.isDirectory());
// 			console.log('--------------');
// 		});
// 	});
// });

// ====ремув дир====
// fs.rmdir(`${__dirname}/movies/home`, { recursive: true }, (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// });

// ====== удаление файла =====

// fs.unlink(filePathToRemove, (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// });

// ===== переименование файла=======

// fs.rename(filePath, filePath2, (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// });

// == можно копировать и переносить, менять расширение====

// fs.rename(filePath2, filePathNew, (err) => {
// 	if (err) {
// 		console.log(err);
// 	}
// });

// ===== path ===== тут вбудований метод normalize (нормализует путь)
// const path = require('path');

// let s = path.join(__dirname, 'movies', 'xxx', 'test', 'zz.mp4');

// console.log(s);

// ===== streams ====

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'movies', 'feb', 'mode.txt');

// fs.mkdir(path.join(__dirname, 'movies', 'feb', 'mode.txt'), { recursive: true }, () => {});

// let writeStrea  = fs.createWriteStream(filePath);

// for (let index = 0; index < 99999; index++) {
// 	writeStream.write('TEST \n');
// }

// let readStream = fs.createReadStream(filePath);

// readStream.on('data', (chunk) => {
//    console.log(chunk);
// });

// readStream.on('end', () => {
//    console.log('Read is over');
// });

// +++перенаправляю данные++

let readStream = fs.createReadStream(filePath);
let writeStream = fs.createWriteStream(path.join(__dirname, 'movies', 'feb', 'tst.txt'));

// readStream.on('data', (chunk) => {
// 	writeStream.write(chunk);
// });

// ++++ это один вариант, но не очень ок, есть другой через пайпы+++

readStream.pipe(writeStream);
