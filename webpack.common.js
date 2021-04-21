const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    devtool: false,
    plugins: [new HtmlWebpackPlugin({template: './src/template.html'})],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[contenthash].[ext][query]',
                }
            },
        ]
    }

}