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
              presets: [
                '@babel/preset-react',
              ],
              plugins: [
                "babel-plugin-macros"
              ]
            }
          }
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack', 'url-loader'],
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin(),
    ],
  };
};
