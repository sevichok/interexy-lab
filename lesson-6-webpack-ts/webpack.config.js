const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// require('webpack')

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.ts', '.js']
    },
    entry: {
        bundle: path.resolve(__dirname, 'src/index.ts')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }],
    },
    // devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8080,
        open: true,
        compress: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'ts webpack',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/template.html')
        })
    ],
}