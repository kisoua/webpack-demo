/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index.js",

  mode: "production",

  output: {
    filename: "[name].[chunkhash:8].js",
  },

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
      minSize: 0,
      maxInitialRequests: 6,
      cacheGroups: {
        default: {
          test: /[\\/]src[\\/]/,
          minChunks: 1,
          priority: 10,
          name: (module) => {
            var reg = /.+\/src\/(\w+-?\d?)/;
            var res = module.context.match(reg);
            if (!res) return "main";
            var n = res[1].split("-").join("");
            return n + "~" + "main";
          },
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
      },
    },
  },
};
