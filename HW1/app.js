// ================  1  ===============

const fs = require('fs');
const path = require('path');

const filePath18 = path.join(__dirname, 'dec2020', '18_00');
const filePath20 = path.join(__dirname, 'dec2020', '20_00');

fs.readdir(`${filePath20}`, (err, files) => {
	if (err) {
		console.log(err);
		return;
	}

	files.forEach((file) => {
		fs.rename(`${filePath20}/${file}`, `${filePath18}/${file}`, (err) => {
			if (err) {
				console.log(err);
			}
		});
	});
});

fs.readdir(`${filePath18}`, (err, files) => {
	if (err) {
		console.log(err);
		return;
	}

	files.forEach((file) => {
		fs.rename(`${filePath18}/${file}`, `${filePath20}/${file}`, (err) => {
			if (err) {
				console.log(err);
			}
		});
	});
});

// ====================    2   ================

// const fs = require('fs');
// const path = require('path');

// const filePath18 = path.join(__dirname, 'dec2020', '18_00');
// const filePath20 = path.join(__dirname, 'dec2020', '20_00');
// const filePathGirls = path.join(__dirname, 'dec2020', 'girls');
// const filePathBoys = path.join(__dirname, 'dec2020', 'boys');

// fs.mkdir(filePathGirls, { recursive: true }, (err) => {
// 	console.log(err);
// });
// fs.mkdir(filePathBoys, { recursive: true }, (err) => {
// 	console.log(err);
// });

// fs.readdir(filePath18, (err, files) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	files.forEach((file) => {
// 		fs.readFile(path.join(filePath18, file), (err, data) => {
// 			if (err) {
// 				console.log(err);
// 				return;
// 			}
// 			obj18 = JSON.parse(data);

// 			if (obj18.gender === 'female') {
// 				fs.rename(`${filePath18}/${file}`, `${filePathGirls}/${file}`, (err) => {
// 					if (err) {
// 						console.log(err);
// 					}
// 				});
// 				return;
// 			}
// 			fs.rename(`${filePath18}/${file}`, `${filePathBoys}/${file}`, (err) => {
// 				if (err) {
// 					console.log(err);
// 				}
// 			});
// 		});
// 	});
// });

// fs.readdir(filePath20, (err, files) => {
// 	if (err) {
// 		console.log(err);
// 		return;
// 	}
// 	files.forEach((file) => {
// 		fs.readFile(path.join(filePath20, file), (err, data) => {
// 			if (err) {
// 				console.log(err);
// 				return;
// 			}
// 			obj20 = JSON.parse(data);

// 			if (obj20.gender === 'female') {
// 				fs.rename(`${filePath20}/${file}`, `${filePathGirls}/${file}`, (err) => {
// 					if (err) {
// 						console.log(err);
// 					}
// 				});
// 				return;
// 			}
// 			fs.rename(`${filePath20}/${file}`, `${filePathBoys}/${file}`, (err) => {
// 				if (err) {
// 					console.log(err);
// 				}
// 			});
// 		});
// 	});
// });
