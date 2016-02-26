var path = require('path');
var webpack = require('webpack');
var pathToReact = path.resolve('node_modules', 'react/dist/react.min.js');
var pathToReactDom = path.resolve('node_modules', 'react-dom/dist/react-dom.min.js');
var pathToReactRouter = path.resolve('node_modules', 'react-router/umd/ReactRouter.min.js');
var pathToHistory = path.resolve('node_modules', 'history/umd/History.min.js');
var pathToFlux = path.resolve('node_modules', 'flux/dist/Flux.min.js');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/main.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }              
      }
    ],
    noParse: [
      pathToReact,
      pathToReactRouter,
      pathToReactDom,
      pathToHistory,
      pathToFlux
    ]
  }
};
