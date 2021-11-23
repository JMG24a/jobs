//iniciar entorno
const express = require('express'); // iniciar express
const app = express();
const morgan = require('morgan'); //visualizar las peticiones
const mysql = require('mysql'); // db para la aplicaion
const exp_mysql_connection = require('express-myconnection')
const webpack = require('webpack'); // el empaquetador
const webpackDevMiddleware = require('webpack-dev-middleware');//sirve para conectar express con webpack 
/*developer*/const webpackConfig = require('./webpack.config.dev');//direccion de mi archivo webpack de config
/*production*/ //const webpackConfig = require('./webpack.config.dev');
const routerJob = require('./src/apis/index'); //asignando la direccion del router



//configuracion del server
app.set('port', process.env.PORT || 3000); //asignar puerto de la app 
app.set('json space', 2); //sive para acomodar el Json con una identacion

app.use(webpackDevMiddleware(webpack(webpackConfig))); //asignacion de la configuracion de webpack para minificar
app.use(express.static(__dirname + './public' ));//carpeta publica para las vistas "si llegase a tener" 
app.use(express.urlencoded({extended: false}));//envios de formatos simples
app.use(express.json());//expresamos que estaremos enviando json`s




//middlewares
app.use(morgan('dev'));//sirve para ver la peticiones "http" a la app
app.use(exp_mysql_connection(mysql,{
    host: 'localhost', 
    user:'jmg24a', 
    database: 'jobsDB',
    password: 'Mysql.jmgy24',
    connectionLimit: 5
},'single'));




//Router
app.use('/api/jobs',routerJob); //router API jobs




//iniciar server
app.listen(app.get('port'), () => {
    console.log(`listen on port ${app.get('port')}`);
});