import { merge } from "webpack-merge";
import config from "./webpack.config.js";

const prodConfig = {
  mode: "production",
};

export default merge(config, prodConfig);
