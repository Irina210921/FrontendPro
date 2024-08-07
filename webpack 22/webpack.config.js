const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports ={
    entry: {
        main:[ path.join(__dirname, 'src/index.js'), path.join(__dirname, 'src/main.scss') ],
    },
    output: { path: path.join(__dirname, 'dist'), filename: '[name].js'},
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
};