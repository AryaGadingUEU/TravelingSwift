import path from "path";
import { fileURLToPath } from "url";
import { merge } from "webpack-merge";
import config from "./webpack.config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const devConfig = {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  },
};

export default merge(config, devConfig);
