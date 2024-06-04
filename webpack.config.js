import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.m?js#/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/planning.html"),
      filename: "planning.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/recommendation.html"),
      filename: "recommendation.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/aboutus.html"),
      filename: "aboutus.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/gallery.html"),
      filename: "gallery.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/profile.html"),
      filename: "profile.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/planning/before.html"),
      filename: "before.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/before-list/before1.html"
      ),
      filename: "before1.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/before-list/before2.html"
      ),
      filename: "before2.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/before-list/before3.html"
      ),
      filename: "before3.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/before-list/before4.html"
      ),
      filename: "before4.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/current.html"
      ),
      filename: "current.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/current-list/current1.html"
      ),
      filename: "current1.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/current-list/current2.html"
      ),
      filename: "current2.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/current-list/current3.html"
      ),
      filename: "current3.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/current-list/current4.html"
      ),
      filename: "current4.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/planning/after.html"),
      filename: "after.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/after-list/after1.html"
      ),
      filename: "after1.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/after-list/after2.html"
      ),
      filename: "after2.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/after-list/after3.html"
      ),
      filename: "after3.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/planning/after-list/after4.html"
      ),
      filename: "after4.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        "./src/templates/account_log_screen/logscreen.html"
      ),
      filename: "logscreen.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/assets"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
  ],
  //   watch: true,
  devtool: false,
};
