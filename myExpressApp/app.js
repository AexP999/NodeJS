// // ========================   l2   ===================

// const express = require('express');
// const expressHbs = require('express-handlebars'); //44:00
// const path = require('path'); //46

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); //1:12 научить нод читать бади??? читать формы

// app.use(express.static(path.join(__dirname, 'static'))); //54 сделали публичную папку
// app.set('view engine', '.hbs'); //49:00
// app.engine(
// 	'.hbs',
// 	expressHbs({
// 		defaultLayout: false
// 	})
// ); //49:00

// app.set('views', path.join(__dirname, 'static')); //49:00

// let users = [
// 	{ name: 'Dima', age: 22, password: 'pass1' },
// 	{ name: 'Vika', age: 18, password: 'pass1' },
// 	{ name: 'Cvrystina', age: 16, password: 'pass1' },
// 	{ name: 'Viktor', age: 25, password: 'pass1' }
// ];
// // app.get('/', (req, res) => {
// // 	console.log(req);

// // 	// res.write('Hellosiki \n');
// // 	// res.write('Hellosiki2');

// // 	// res.end('Helloo chat');
// // 	// ++ 14:28 ++
// // 	// res.send('HELO');
// // 	// ++ 15:47 ++
// // 	res.json('yakas hren');
// // 	// чаще всего используется
// // });

// // app.get('/ping', (req, res) => {
// // 	res.end('pong');
// // });

// // app.post('/', (req, res) => {
// // 	console.log(req.body);
// // 	res.json('POST');
// // });
// // 20:00 пост можно увидеть в postman. Пишем там в body json объект и чтобы получить в ноде добавляем 68 и app.use(express.json()) 49

// // // +++ 25 +++
// // app.get('/users', (req, res) => {
// // 	res.json(users);
// // });
// // //тепер одного

// // app.get('/users/1', (req, res) => {
// // 	res.json(users[1]);
// // });

// // app.get('/users/:userId', (req, res) => {
// // 	const { userId } = req.params;

// // 	res.json(users[userId]);
// // });
// // +++ 29:00 +++ В одному реквести может быть params, query , body. req.query примає все що після ?, req.body - все що в бади и req.params  всі дінамічні параметри з урл

// // +++   55  +++

// app.get('/users', (req, res) => {
// 	res.render('users', { name: 'Diana', users });
// });

// // +++   1:06   +++

// app.get('/login', (req, res) => {
// 	res.render('login', { isAdult: false }); //к if login.hbs
// });

// app.post('/login', (req, res) => {
// 	console.log(req.body);
// 	res.json('OK');
// 	// +++ 1:14  +++ тре занайти юзера для пасс user.find()
// });

// app.listen(3000, () => {
// 	console.log('App listen 3000');
// });

const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userArrPath = path.join(__dirname, 'bd', 'usersArr.json');

app.set('view engine', '.hbs'); //49:00
app.engine(
	'.hbs',
	expressHbs({
		defaultLayout: false
	})
); //49:00
app.set('views', path.join(__dirname, 'static')); //49:00

app.use(express.static(path.join(__dirname, 'static'))); //54 сделали публичную папку

// --------------------------UserData--------------------

let newUser = { name: 'Jho', age: 24, password: 123 };

fs.readFile(userArrPath, (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	let users = JSON.parse(data);
	console.log('users', users);
	users.push(newUser);
	fs.writeFile(userArrPath, JSON.stringify(users), (err) => {
		if (err) {
			console.log(err);
		}
	});
});
// --------------------------UserData--------------------

// --------------------------Pages--------------------

app.get('/login', (req, res) => {
	res.render('login'); //к if login.hbs
});

// --------------------------Pages--------------------
app.listen(3000, () => {
	console.log('App listen 3000');
});
