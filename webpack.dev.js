const merge = require('webpack-merge');

const common = require('./webpack.common');

module.exports = merge(common, {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        overlay: true,
    },
    devtool: 'source-map',
    mode: 'development',
});
