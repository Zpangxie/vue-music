module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://tingapi.ting.baidu.com/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
