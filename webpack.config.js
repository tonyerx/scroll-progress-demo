const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist/static/',
        filename: 'bundle.[chunkhash].js',
    },
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        inline: true
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            module: true
                        }
                    },
                    {
                        loader: 'css-loader'
                        
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: __dirname + '/src/index.html'
        }),
        new CleanWebpackPlugin(['./dist']),
    ],
}