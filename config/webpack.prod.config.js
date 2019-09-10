const nodeExternals = require('webpack-node-externals')
const config = require('./webpack.base.config')
config.entry = './src/index.js'
config.output.libraryTarget = 'commonjs2'

config.externals.push(nodeExternals())

module.exports = config
