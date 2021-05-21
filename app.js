const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const app = express();
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');

const path = require('path');

require('dotenv').config();
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-with, Content, Accept, Content-Type, Authorization'
	);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/users/', usersRoutes);
app.use('/api/posts/', postsRoutes);
app.use('/api/posts/', commentsRoutes);

module.exports = app;
