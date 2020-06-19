const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        // filename: 'index.js',
        filename: 'index.[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/assets/index.html'
        }
        )
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                //css-loader -> js 读取 css文件
                //style-loader -> 将css文件放在html文件的style标签里  
            },
        ],
    },
    devServer: {
        contentBase: './dist',
    },



};
