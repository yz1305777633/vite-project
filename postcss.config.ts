/** @type {import('postcss').Config} */
module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {
      // 在这里指定你需要兼容的浏览器版本
      overrideBrowserslist: ['last 2 versions', 'ie >= 10'],
    },
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    'postcss-preset-env': {
      features: { 'nesting-rules': false },
    },
  }
}
