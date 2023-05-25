const path = require('path')
const cracoLess = require('craco-less')

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  //添加
  plugins: [
    {
      plugin: cracoLess
    }
  ],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
