const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (webpackConfig, env) => {
  return {
    ...webpackConfig,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react']
            }
          }
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
    ],
  };
};
