module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /jsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        contentBase: './'
    }
}