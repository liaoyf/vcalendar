const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./webpack.base.config')
config.entry = './test/index.js'
config.devServer = {
  inline: true
}
config.devtool = 'source-map'
config.plugins.push(
  new HtmlWebpackPlugin({
    template: './test/index.html'
  })
)

module.exports = config
