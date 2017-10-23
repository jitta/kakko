const path = require('path');

module.exports = {
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