const {merge} = require('webpack-merge')
const BasicPart = require('./BasicPart')

const devWebpackConfig = merge(BasicPart, {
    mode: "development",
    devtool: "source-map"
})

module.exports = new Promise((resolve) => {
    resolve(devWebpackConfig)
})