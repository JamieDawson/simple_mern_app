const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path'); //comes with nodejs
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

//const MONGODB_URI = `mongodb+srv://JamieTestThis:${process.env.DB_PASSWORD}@youtubedb.7yp1l.mongodb.net/<dbname>?retryWrites=true&w=majority`;

mongoose.connect('mongodb://localhost/mern_youtube', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
	console.log('Mongoose is connected!!!');
});

app.use(morgan('tiny'));

app.use('/api', routes); //everything inside api will start with api.

app.listen(PORT, console.log(`Server is at ${PORT}`));
