import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

// const path = require("node:path");
// const webpack = require('webpack');

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// module.exports = ;
export default {
  experiments: {
    outputModule: true,
  },
  target: "async-node",
  entry: "./src/main.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist/esm"),
    library: {
      // do not specify a `name` here
      type: "module",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?[jt]sx?$/,
        // include: /(src)/,
        exclude: /(node_modules)/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [
    // new webpack.ProgressPlugin({
    //   activeModules: true,
    //   entries: true,
    //   handler(percentage, message, ...args) {
    //     // custom logic
    //   },
    //   modules: true,
    //   modulesCount: 5000,
    //   profile: true,
    //   dependencies: true,
    //   dependenciesCount: 10000,
    //   percentBy: null,
    // }),
  ],
};
