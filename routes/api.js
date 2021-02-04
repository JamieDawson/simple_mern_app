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
	const data = req.body; // taking in json from app.use(express.json())
	const newBlogPost = new BlogPost(data);
	console.log('wut');
	//.save
	newBlogPost.save((error) => {
		if (error) {
			res.status(500).json({msg: 'sorry you got ane error'});
		} else {
			console.log('here');
			res.json({
				msg: 'Your data got saved',
			});
		}
	});
});

module.exports = router;
