const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Entry point of your React application
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory (e.g., 'dist' folder)
    publicPath: '/', // Public path for assets
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel for transpiling JavaScript/JSX
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert small images to base64 data URLs (adjust as needed)
              name: 'images/[name].[ext]', // Output path for images
            },
          },
        ],
      },
      // Add more rules for handling other file types (e.g., CSS, fonts)
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html', // HTML template file (if you have one)
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing .js and .jsx files without specifying extensions
  },
  devServer: {
    contentBase: './dist', // Serve files from the 'dist' directory
    port: 3000, // Port for the development server
    historyApiFallback: true, // Enable HTML5 history API routing (for React Router)
  },
};
