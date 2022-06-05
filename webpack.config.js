const path = require("path")
const mode = process.env.NODE_ENV === "production"? "production" : "development"
const port = process.env.PORT || 3000

module.exports = {
    entry: "./src/index.jsx",
    mode: mode,
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "dist/main.js",
        publicPath: "/"
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
                use: [
                    "stlye-loader",
                    {
                        loader: "css-loader",
                        options: {
                            module: true
                        }
                    }
                ]
            }
        ],

    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: "public/",
            publicPath: "/",
        },
        port: port,
        open: true
    }

}