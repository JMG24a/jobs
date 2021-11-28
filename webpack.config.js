const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpackDevServer = require('webpack-dev-server');

module.exports = {
    mode: 'production',
    entry:{
        index: './src/index.js',
    },
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: '[name][contenthash].bundle.js'
        //dev filename: '[name].bundle.js'
    },
    module:{
        rules:[{
            test: /\.m?js$/i,
            exclude: /node_modules/,
            use: {loader: 'babel-loader'},
        },
        {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        },
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]

}