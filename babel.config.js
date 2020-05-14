module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'import',
      {
        libraryName: 'twill-ui',
        libraryDirectory: 'lib',
        style: (name) => `${name}/style.css`,
      },
    ],
  ],
}
