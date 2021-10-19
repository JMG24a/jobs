const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    module:{
        rules:[
            {
                tets: /\.js$/i,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'babel-loader',
                    }
                ]
            },
            {
                tets: /\.html$/i,
                use:[
                    {
                        loader: 'html-loader',
                        minimize: true
                    },
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]


};