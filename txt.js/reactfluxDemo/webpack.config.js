var webpack = require("webpack");

module.exports = {
    entry : "./src/js/main.js",
    output : {
        path : __dirname + "/dist/js/",
        filename : "index.js"
    },
    module : {
        loaders : [
            {test : /\.js$/,exclude : /node_modules/,loader:"babel-loader?presets[]=es2015&presets[]=react"}
        ]
    },
    plugins : [
        new webpack.ProvidePlugin({
            React : "react"
        })
    ]
}