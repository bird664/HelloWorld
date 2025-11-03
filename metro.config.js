const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // Add asset handling configuration
  config.resolver = {
    ...config.resolver,
    extraNodeModules: {
      'react/compiler-runtime': path.resolve(__dirname, 'shim', 'react-compiler-runtime.js'),
      '@react-native-async-storage/async-storage': path.resolve(__dirname, 'shim/asset-registry.ts'),
      '@expo/asset-registry': path.resolve(__dirname, 'shim/asset-registry.ts')
    },
    assetExts: [
      ...config.resolver.assetExts,
      // Images
      'gif',
      'jpeg',
      'jpg',
      'png',
      'svg',
      'webp',
      // Fonts
      'ttf',
      'otf',
      'woff',
      'woff2'
    ]
  };

  return config;
})();
