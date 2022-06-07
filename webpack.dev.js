// Webpack Development Config File
const port = process.env.PORT || 3000

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        new: "./src/index.jsx",
        pop: "./src/popup.jsx",
        opt: "./src/options.jsx"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
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
                use: ["style-loader","css-loader"]
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
    devtool: "source-map",
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
    ],
    devServer: {
        static: [
            {
              directory: path.join(__dirname, 'dist'),
            }
          ],
        port: port,
        open: true
    }
}