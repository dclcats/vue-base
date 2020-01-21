module.exports = {
  devServer: {
    proxy: {
      '/hf': {
        target: 'http://10.251.80.11:8080',
      }
    }
  }
}
