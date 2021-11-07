const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const cssLoaders = [
  isProduction ? MiniCssExtractPlugin.loader : "style-loader",
  "css-loader",
  "postcss-loader",
];

module.exports = {
  mode: isProduction ? "production" : "development",

  entry: "./src/index.js",

  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js?[contenthash]",
    chunkFilename: "[id].js?[contenthash]",
    publicPath: process.env.CDN_URL || "/",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { useBuiltIns: "entry", corejs: 3 }],
                ["@babel/preset-react", { runtime: "automatic" }],
              ],
              plugins: [
                !isProduction && require.resolve("react-refresh/babel"),
              ].filter(Boolean),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: cssLoaders,
      },
      {
        test: /\.(sass|scss)$/,
        use: [...cssLoaders, "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ title: "Gonzo" }),
    !isProduction && new ReactRefreshWebpackPlugin(),
    isProduction &&
      new MiniCssExtractPlugin({ filename: "[name].css?[contenthash]" }),
  ].filter(Boolean),

  devtool: !isProduction && "eval",

  devServer: {
    hot: true,
    historyApiFallback: true,
    static: { directory: path.join(__dirname, "public") },
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".js"],
  },
};
