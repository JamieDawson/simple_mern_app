const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPosts');

// Routes
//Note:  api is the starting point of every route.
router.get('/', (req, res) => {
	BlogPost.find({})
		.then((data) => {
			console.log('data: ', data);
			res.json(data);
		})
		.catch((error) => {
			console.log('error: ', error);
		});
});

router.get('/names', (req, res) => {
	const data = {
		username: 'dawson',
		age: 33,
	};
	res.json(data);
});

router.post('/save', (req, res) => {
	console.log('Body :', req.body);
	res.json({
		msg: 'we got the data',
	});
});

module.exports = router;
