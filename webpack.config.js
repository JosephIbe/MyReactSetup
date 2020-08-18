const path = require('path')
const HTMLWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new HTMLWebPackPlugin({
            template: './src/public/index.html'
        })
    ],
    // resolve: {
    //     modules: [__dirname, 'node_modules', 'src'],
    //     extensions: ['*', '.jsx', '.js', '.tsx', '.ts']
    // },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
                // use: [
                //     {loader: 'babel-loader'}
                // ]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                exclude: /node_modules/,
                use: ['file-loader']
            }
        ]
    }
    // devServer: {
    //     hot: true,
    //     open: true,
    //     contentBase: path.resolve(__dirname, 'dist'),
    //     host: 'localhost',
    //     port: 3001,
    //     clientLogLevel: 'silent'
    // }
}