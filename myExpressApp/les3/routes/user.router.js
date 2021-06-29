const router = require('express').Router();

router.get('/user', (req, res) => {
	res.json([ { name: 'Anton' } ]);
});

router.post('/user', (req, res) => {
	res.json('success');
});

router.delete('/user/:userId', (req, res) => {
	res.status(204).json('success');
});

router.get('/user/:userId', (req, res) => {
	res.json('Dima');
});

module.exports = router;
