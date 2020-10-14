const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/index.tsx',
  output: {
    path: `${__dirname}`,
    filename: 'public/index.js',
    libraryTarget: 'this',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      src: path.resolve(__dirname, './src'), //srcをrootに
    },
  },
};
