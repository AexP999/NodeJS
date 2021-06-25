const express = require('express');
const expressHbs = require('express-handlebars');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userArrPath = path.join(__dirname, 'bd', 'usersArr.json');

app.set('view engine', '.hbs');
app.engine(
	'.hbs',
	expressHbs({
		defaultLayout: false
	})
);
app.set('views', path.join(__dirname, 'static'));

app.use(express.static(path.join(__dirname, 'static')));

let newUser = '';

fs.readFile(userArrPath, (err, data) => {
	if (err) {
		console.log(err);
		return;
	}
	let users = JSON.parse(data);
	console.log('users', users);
	// ----------------------------------------------

	// ----------  add new user and write to db function ----------
	let addnewUser = (newUser) => {
		users.push(newUser);
		fs.writeFile(userArrPath, JSON.stringify(users), (err) => {
			if (err) {
				console.log(err);
			}
		});
	};

	// ----------------------------------------------

	// --------------------------Pages--------------------
	app.get('/', (req, res) => {
		res.render('home');
	});

	app.get('/login', (req, res) => {
		res.render('login');
	});
	app.get('/register', (req, res) => {
		res.render('register');
	});

	app.get('/welcome', (req, res) => {
		res.render('welcome', { pass: true });
	});

	app.post('/login', (req, res) => {
		console.log('usersPost', users);

		const sameName = users.find(({ name }) => name === req.body.name);

		console.log('sameName', sameName);

		if (!sameName) {
			res.render('welcome', { pass: false });
			return;
		}
		if (!(sameName.password === req.body.password)) {
			res.render('welcome', { pass: false });
			return;
		}

		res.render('welcome', { pass: true, sameName });
	});

	app.post('/register', (req, res) => {
		let sameName = users.find(({ name }) => name === req.body.name);
		if (sameName) {
			res.json('Choose another name');
			return;
		}
		newUser = req.body;
		addnewUser(newUser);
	});

	app.get('/users', (req, res) => {
		res.render('users', { users });
	});
});
// ----------------------------------------------
app.listen(3000, () => {
	console.log('App listen 3000');
});
