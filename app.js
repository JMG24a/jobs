const express = require('express');
const app = express();
const morgan = require('morgan')

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.dev');

app.set('port', 3000);
app.set('json space', 2)

app.use(morgan('dev'));
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(express.static(__dirname + './public' ))
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Router
app.use('/api/jobs',require('./src/api/index'));

app.listen(3000, () => {
    console.log(`listen on port ${3000}`)
});