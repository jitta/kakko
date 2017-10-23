const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        // Add every directory that needs to be compiled by Babel during the build
        include: [
          path.resolve(__dirname, '..', 'src'),
          path.resolve(__dirname, '.', 'stories'),
          path.resolve(__dirname, 'node_modules/react-native-uncompiled')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            // This aliases 'react-native' to 'react-native-web' and includes only
            // the modules needed by the app
            plugins: ['react-native-web/babel'],
            // The 'react-native' preset is recommended (or use your own .babelrc)
            presets: ['react-native']
          }
        }
      }
    ]
  },
  resolve: {
    // These are the reasonable defaults supported by the Node ecosystem.
    // We also include JSX as a common component filename extension to support
    // some tools, although we do not recommend using it, see:
    // https://github.com/facebookincubator/create-react-app/issues/290
    // `web` extension prefixes have been added for better support
    // for React Native Web.
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {
      '@storybook/react-native': '@storybook/react',
      'react-native-syntax-highlighter': 'react-syntax-highlighter'
    }
  },
  devtool: 'cheap-module-source-map'
}