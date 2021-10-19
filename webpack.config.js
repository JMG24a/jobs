const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry:{
        index: './src/index.js',
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: '[name][contenthash].bundle.js'
        //dev filename: '[name].bundle.js'
    },
    module:{
        rules:[
            { test: /\.js$/i, use: 'babel-loader'},
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]

}