const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDirectory = 'dist';

module.exports = {
    entry: ['babel-polyfill', './src/client/app/app.js'],
    output: {
        path: path.join(__dirname, outputDirectory),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
        },
        {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true, // webpack@1.x
                        disable: true, // webpack@2.x and newer
                    },
                },
            ],
        }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        port: 3000,
        open: true,
        compress: true,
        disableHostCheck: true,
        hotOnly: true,
        historyApiFallback: true,
        allowedHosts: [
            '.ngrok.io'
        ],
        proxy: {
            '/api': 'http://localhost:8080'
        }
    },
    watchOptions: {
        ignored: ['node_modules/**', 'src/server/**']
    },
    plugins: [
        new CleanWebpackPlugin([outputDirectory]),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico'
        })
    ],
    resolve: {
        modules: ['node_modules', 'src/client/app'],
        alias: {
            containers: path.resolve(__dirname, 'src/client/app/containers'),
            dateUtils: path.resolve(__dirname, 'src/client/app/utils/dateUtils.js'),
            utils: path.resolve(__dirname, 'src/client/app/utils'),
            images: path.resolve(__dirname, 'src/client/app/images')
        }
    }
};
