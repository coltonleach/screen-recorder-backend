const path = require('path')

module.exports = {
  mode: 'production',
  entry: './node_modules/@ffmpeg/core/dist/ffmpeg-core.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundled-library.js',
    library: 'YourLibraryName',
    libraryTarget: 'umd',
  },
  externals: {},
}
