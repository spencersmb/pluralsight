module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 4 versions', '> 2%', 'Firefox ESR']
    })
  ]
};