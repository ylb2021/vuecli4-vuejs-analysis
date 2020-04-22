const path = require('path');

function resolve(dir) {
    return path.join(__dirname, "./", dir);
}
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            extensions: [".js", ".json"],
            alias: {
                "compiler": resolve("lib/vuejs/compiler"),
                "core": resolve("lib/vuejs/core"),
                "shared": resolve("lib/vuejs/shared"),
                "web": resolve("lib/vuejs/platforms/web"),
                "weex": resolve("lib/vuejs/platforms/weex")
            }
        }
    },
    devServer: {
        open: "chrome"
    }
}