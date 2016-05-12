var path = require('path');

module.exports = {
  entry: {
    welcome: './resources/assets/entries/welcome/index.jsx',
    todo_list: './resources/assets/entries/todo_list/index.jsx'
  },
  output: {
    path: './public/build',
    filename: '[name].entry.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  resolve: {
    root: __dirname,
    alias: {
      actions: path.join(__dirname, 'resources', 'assets', 'actions'),
      components: path.join(__dirname, 'resources', 'assets', 'components'),
      constants: path.join(__dirname, 'resources', 'assets', 'constants'),
      entries: path.join(__dirname, 'resources', 'assets', 'entries'),
      reducers: path.join(__dirname, 'resources', 'assets', 'reducers'),
    }
  }
};
