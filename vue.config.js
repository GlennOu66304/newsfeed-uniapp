// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/prefix/api/user/list': {
        target: 'http://c.3g.163.com/nc/article/list/T1348648517839/0-20.html',
        pathRewrite: {
          '^/prefix': ''
        }
      }
    },
  }
}