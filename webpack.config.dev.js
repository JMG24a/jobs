const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry:{
        index: './src/index.js',
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        //filename: '[name][contenthash].bundle.js' production
       filename: '[name].bundle.js'
    },
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        historyApiFallback: true,
        port: 3000,
    },
    module:{
        rules:[{
            test: /\.m?js$/i,
            exclude: /node_modules/,
            use: {loader: 'babel-loader'},
        },
        ],
    },
    resolve:{
        alias:{
            Persons: path.resolve(__dirname, 'src/persons/'),
        },
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]

}