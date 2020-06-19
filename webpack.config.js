const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        // filename: 'index.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    }
};