const path = require('path')
const DllPlugin = require('webpack/lib/DllPlugin')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: {
    remark: [
      'remark',
    ],
    reactRenderer: [
      'remark-react'
    ]
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(process.cwd(), '../dist/js'),
    library: '[name]'
  },
  plugins: [
    new DllPlugin({
      name: '[name]',
      path: path.resolve(process.cwd(), '../dist/js', '[name].manifest.json')
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}
