/* eslint-disable func-names */
module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
      },
    ],
  ];
    // const plugins = [ ... ];

  return {
    presets,
    // plugins
  };
};
