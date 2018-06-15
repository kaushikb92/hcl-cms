var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    devServer: {
        inline:true,
        port: 4200,
        disableHostCheck: true,
        host: '0.0.0.0'
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }, {
                test: /\.css$/,
                loaders: ['style', 'css']
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
                loader: 'file-loader'
            }
        ]
    }
};

module.exports = config;