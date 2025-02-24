const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.[contenthash].js',
    publicPath: process.env.PUBLIC_PATH || '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './src/images/favicon.png',
    }),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/activity.html', to: 'activity.html' },
        { from: 'src/map.html', to: 'map.html' },
        { from: 'src/timer.html', to: 'timer.html' },
        { from: 'src/resume.html', to: 'resume.html' },
        { from: 'src/images', to: 'images' },
        { from: 'src/styles', to: 'styles' },
        { from: 'src/scripts', to: 'scripts' },
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'src'),
    compress: true,
    port: 8080,
    historyApiFallback: true,
    headers: {
      'Permissions-Policy': 'interest-cohort=()' // Отключаем фичу interest-cohort
    }
  },
  mode: 'development'
};
