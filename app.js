//iniciar entorno
const express = require('express'); // iniciar express
const app = express();
const path = require('path');
const morgan = require('morgan'); //visualizar las peticiones
const mysql = require('mysql'); // db para la aplicaion
const exp_mysql_connection = require('express-myconnection')
const webpack = require('webpack'); // el empaquetador
const webpackDevMiddleware = require('webpack-dev-middleware');//sirve para conectar express con webpack 
/*developer*/ const webpackConfig = require('./webpack.config.dev');//direccion de mi archivo webpack de config
/*production*/ //const webpackConfig = require('./webpack.config');
const routerJob = require('./src/router/index.js');
const routerJobApi = require('./src/router/api'); //asignando la direccion del router
const DBKey = require('./env')


//configuracion del server
app.set('port', process.env.PORT || 3000); //asignar puerto de la app 
app.set('json space', 2); //sive para acomodar el Json con una identacion

app.use(webpackDevMiddleware(webpack(webpackConfig))); //asignacion de la configuracion de webpack para minificar
app.use(express.static('./public'));//direccion de archivos estaticos" 
app.use(express.urlencoded({extended: false}));//envios de formatos simples
app.use(express.json());//expresamos que estaremos enviando json`s




//middlewares
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/views'));
app.use(morgan('dev'));//sirve para ver la peticiones "http" a la app
app.use(exp_mysql_connection(mysql,DBKey,'single'));




//Router
app.use('/', routerJob); //router rutas index
app.use('/api/jobs',routerJobApi); //router API jobs




//iniciar server
app.listen(app.get('port'), () => {
    console.log(`listen on port ${app.get('port')}`);
});