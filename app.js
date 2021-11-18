//iniciar entorno
const express = require('express'); // iniciar express
const app = express();
const morgan = require('morgan'); //visualizar las peticiones
const mysql = require('mysql'); // db para la aplicaion
const my_connect = require('express-myconnection'); // my connect sirve para agilizar la conexion con mysql 
const webpack = require('webpack'); // el empaquetador
const webpackDevMiddleware = require('webpack-dev-middleware');//sirve para conectar express con webpack 
/*developer*/const webpackConfig = require('./webpack.config.dev');//direccion de mi archivo webpack de config
/*production*/ //const webpackConfig = require('./webpack.config.dev');

app.set('port', 3000); //asignar puerto de la app 
app.set('json space', 2); //sive para acomodar el Json con una identacion

app.use(webpackDevMiddleware(webpack(webpackConfig))); //asignacion de la configuracion de webpack para minificar
app.use(express.static(__dirname + './public' ));//carpeta publica para las vistas "si llegase a tener" 
app.use(express.urlencoded({extended: false}));//envios de formatos simples
app.use(express.json());//expresamos que estaremos enviando json`s

//middlewares
app.use(morgan('dev'));//sirve para ver la peticiones "http" a la app
app.use(my_connect(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'jobsDB',
}, 'single'));

//Router
app.use('/api/jobs',require('./src/apis/index'));

app.listen(3000, () => {
    console.log(`listen on port ${3000}`);
});