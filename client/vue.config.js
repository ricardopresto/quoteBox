const path = require("path");

module.exports = {
    outputDir: path.resolve(__dirname, "../server/public"),
    devServer: {
        proxy: {
            "/quotes": {
                target: "http://localhost:8080"
            }
        }
    }
}