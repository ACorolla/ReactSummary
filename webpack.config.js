var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/app.js'
  },
  output: {
    filename: 'js/[name].js',
    path: path.resolve(__dirname, './dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname,'./node_modules/'),
        include: path.resolve(__dirname,'./src/'),
        loader: "babel-loader"
      },
      {
        test: /\.jsx$/,
        exclude: path.resolve(__dirname,'./node_modules/'),
        include: path.resolve(__dirname,'./src/'),
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }, {
          loader: "postcss-loader"
        }, {
          loader: "less-loader"
        }]
      },
      {
        test: /\.html$/,
        use: [ {
          loader: 'html-loader'
        }],
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader?variable=data'
      }
    ]
  }
};