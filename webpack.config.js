
module.exports = {
  mode: 'development',
  entry: '/src/components/strings.js',
  output: {
    path: '/Users/ayushpatel/Desktop/interactive-calendar/dist',
    filename: 'webpack-bundle.js',
  },
  module: {
      rules: [
          {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader'
              }
          },
          {
              test: /\.scss|css$/,
              use: [
                  'style-loader',
                  'css-loader'
              ]
          }
      ]
  },
};