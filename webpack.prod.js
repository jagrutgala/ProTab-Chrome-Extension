// Webpack Production Config File
const port = process.env.PORT || 3000

const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        new: "./src/index.jsx",
        pop: "./src/popup.jsx",
        opt: "./src/options.jsx"
    },
    clean: true,
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].[contenthash].bundle.js",
    },
    module : {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,"css-loader"]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.((jpe?g)|png|gif|svg)$/,
                use: ["file-loader"]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./public/index.html",
            title: "ProTab",

            chunks: ["new"]
        }),
        new HtmlWebpackPlugin({
            filename: "popup.html",
            template: "./public/popup.html",
            title: "",
            
            chunks: ["pop"]
        }),
        new HtmlWebpackPlugin({
            filename: "options.html",
            template: "./public/options.html",
            title: "ProTab Options",
            
            chunks: ["opt"]
        }),
        new CopyPlugin({
            patterns: [
              { from: "public/manifest.json"},
              { from: "public/icons/"},
            ],
          }),
    ]
}