// https://github.com/timarney/react-app-rewired

// customize-cra, react-app-rewired による webpackの操作

const path = require('path')
const webpack = require('webpack')

module.exports = {
  webpack: function (config, env) {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $$: path.resolve(path.join(__dirname, 'src/js/shortJS.js')),
      })
    )

    return config
  },
}
