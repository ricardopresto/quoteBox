module.exports = {
  devServer: {
    proxy: {
      "/quotes": {
        target: "http://localhost:8050"
      }
    }
  }
};
