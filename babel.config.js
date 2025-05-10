module.exports = api => {
  api.cache(true);
  const plugins = [];

  plugins.push([
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],

      alias: {
        '@': './src',
        '@components': './src/components',
        '@config': './src/config',
        '@hooks': './src/hooks',
        '@navigation': './src/navigation',
        '@screens': './src/screens',
        '@providers': './src/providers',
        '@utils': './src/utils',
        '@types': './src/types',
      },
    },
  ]);

  plugins.push([
    'module:react-native-dotenv',
    {
      moduleName: '@env',
      path: '.env',
      safe: true,
      allowUndefined: false,
    },
  ]);

  return {
    presets: ['module:@react-native/babel-preset'],
    plugins,
  };
};
