module.exports = {
  entry: {
    welcome: './resources/assets/entries/welcome/index.jsx'
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
  }
};
