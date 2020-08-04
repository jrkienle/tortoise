const path = require('path');

module.exports = {
  plugins: [],
  module: {
    rules: [
      {
        include: path.resolve(__dirname, 'src'),
        loader: 'awesome-typescript-loader',
        options: {
          transpileOnly: true,
        },
        test: /\.tsx?$/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx', '.json'],
  },
};
