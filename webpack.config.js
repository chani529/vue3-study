/* webpack.config.js*/
const path = require("path");

const resolve = (dir) => path.join(__dirname, dir);
module.exports = {
  resolve: {
    alias: {
      main: resolve("src"), // 추가 alias 설정
    },
  },
  plugins: [],
  module: {
    rules: [
      //   {
      //     test: /\.(scss|css)$/,
      //     use: [
      //       {
      //         loader: MiniCssExtractPlugin.loader,
      //         options: {
      //           publicPath: "assets",
      //         },
      //       },
      //       "css-loader",
      //       "sass-loader",
      //     ],
      //   },
      //   {
      //     test: /\.(png|jpe?g|gif)$/i,
      //     loader: "file-loader",
      //     options: {
      //       name: "assets/[name].[ext]?[hash]",
      //     },
      //   },
    ],
  },
};
