// const { defineConfig } = require("@vue/cli-service");
module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/fansite.scss";
          @import "@/assets/scss/mixin.scss";
        `,
      },
    },
  },
  configureWebpack: require("./webpack.config.js"),
};
